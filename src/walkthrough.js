// ============================================
// WALKTHROUGH - Tour d'introduction pour nouveaux utilisateurs
// ============================================

const STORAGE_KEY = 'walkthroughCompleted';

/**
 * Vérifie si c'est la première visite de l'utilisateur
 */
export function isFirstVisit() {
    return localStorage.getItem(STORAGE_KEY) !== 'true';
}

/**
 * Marque le tutoriel comme terminé
 */
export function completeWalkthrough() {
    localStorage.setItem(STORAGE_KEY, 'true');
}

/**
 * Démarre le tutoriel (réinitialise et relance)
 */
export function startWalkthrough() {
    localStorage.removeItem(STORAGE_KEY);
    // Pour l'instant, on affiche juste une notification
    // Dans une future version, cela pourrait ouvrir un vrai tour guidé
    const msg = window.i18n ? window.i18n.t('walkthroughNote') : 'Tutorial restarted';
    console.log(msg);
    alert(window.i18n ? window.i18n.t('startWalkthrough') + '! ' + window.i18n.t('walkthroughNote') : 'Tutorial will restart on next visit!');
}