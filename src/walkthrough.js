// ============================================
// WALKTHROUGH - Tour d'introduction pour nouveaux utilisateurs
// ============================================

const STORAGE_KEY = 'walkthroughCompleted';
const STEPS = [
    {
        title: 'welcome',
        text: 'welcomeText',
        target: null
    },
    {
        title: 'posemetre',
        text: 'posemetreText',
        target: '#posemetre-tab'
    },
    {
        title: 'flashmetre', 
        text: 'flashmetreText',
        target: '#flash-tab'
    },
    {
        title: 'ratios',
        text: 'ratiosText',
        target: '#ratios-tab'
    },
    {
        title: 'estimation',
        text: 'estimationText',
        target: '#estimation-tab'
    }
];

let currentStep = 0;

/**
 * Vérifie si c'est la première visite de l'utilisateur
 */
function isFirstVisit() {
    return localStorage.getItem(STORAGE_KEY) !== 'true';
}

/**
 * Marque le tutoriel comme terminé
 */
function completeWalkthrough() {
    localStorage.setItem(STORAGE_KEY, 'true');
    hideWalkthrough();
}

/**
 * Démarre le tutoriel (réinitialise et relance)
 */
function start() {
    localStorage.removeItem(STORAGE_KEY);
    currentStep = 0;
    showWalkthroughStep();
}

/**
 * Affiche l'étape actuelle du tutoriel
 */
function showWalkthroughStep() {
    const step = STEPS[currentStep];
    if (!step) {
        completeWalkthrough();
        return;
    }
    
    // Mettre en évidence l'élément cible
    if (step.target) {
        const el = document.querySelector(step.target);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('walkthrough-highlight');
        }
    }
    
    // Créer ou mettre à jour la popup
    let popup = document.getElementById('walkthrough-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'walkthrough-popup';
        popup.className = 'walkthrough-popup';
        document.body.appendChild(popup);
    }
    
    const title = window.i18n?.t(`walkthrough${step.title.charAt(0).toUpperCase() + step.title.slice(1)}`) || step.title;
    const text = window.i18n?.t(step.text) || '';
    const nextText = window.i18n?.t(currentStep === STEPS.length - 1 ? 'walkthroughFinish' : 'walkthroughNext') || 'Suivant';
    
    popup.innerHTML = `
        <div class="walkthrough-content">
            <h3>${title}</h3>
            <p>${text}</p>
            <div class="walkthrough-nav">
                <button onclick="window.walkthrough.prev()">${window.i18n?.t('walkthroughPrev') || 'Précédent'}</button>
                <span>${currentStep + 1}/${STEPS.length}</span>
                <button onclick="window.walkthrough.next()">${nextText}</button>
            </div>
        </div>
    `;
    
    // Positionner près de l'élément cible
    if (step.target) {
        const el = document.querySelector(step.target);
        if (el) {
            const rect = el.getBoundingClientRect();
            popup.style.top = (rect.bottom + window.scrollY + 10) + 'px';
            popup.style.left = (rect.left + window.scrollX) + 'px';
        }
    }
    
    popup.style.display = 'block';
}

/**
 * Passe à l'étape suivante
 */
function next() {
    // Nettoyer le highlight
    if (STEPS[currentStep].target) {
        document.querySelector(STEPS[currentStep].target)?.classList.remove('walkthrough-highlight');
    }
    
    currentStep++;
    if (currentStep < STEPS.length) {
        showWalkthroughStep();
    } else {
        completeWalkthrough();
    }
}

/**
 * Revient à l'étape précédente
 */
function prev() {
    // Nettoyer le highlight
    if (STEPS[currentStep].target) {
        document.querySelector(STEPS[currentStep].target)?.classList.remove('walkthrough-highlight');
    }
    
    currentStep = Math.max(0, currentStep - 1);
    showWalkthroughStep();
}

/**
 * Cache le tutoriel
 */
function hideWalkthrough() {
    const popup = document.getElementById('walkthrough-popup');
    if (popup) popup.style.display = 'none';
    
    // Nettoyer tous les highlights
    document.querySelectorAll('.walkthrough-highlight').forEach(el => {
        el.classList.remove('walkthrough-highlight');
    });
}

// Exporter sur window pour accès global
window.walkthrough = {
    isFirstVisit,
    completeWalkthrough,
    start,
    next,
    prev
};