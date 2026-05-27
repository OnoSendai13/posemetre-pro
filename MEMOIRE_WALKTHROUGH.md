# Mémoire - Problème Walkthrough

## ÉTAT ACTUEL
- **Version** : 1.5 (en développement)
- **Problème** : Le bouton "Suivant" fait disparaître le popup au lieu de passer à l'étape suivante

## CE QUI A ÉTÉ TENTÉ

### 1. Correction du texte
- Texte d'accueil corrigé : "Cet outil vous aide à régler des compensations d'exposition avec mesure par lightmetre (Lumière continue, Flash) ou sans (Onglet Estimation)"
- Textes des étapes conformes aux consignes

### 2. Corrections techniques
- `app.js` : Service Worker désactivé en localhost (ligne 292)
- `main.js` : Base path auto-détecté selon hostname
- `styles.css` : `.walkthrough-popup` avec `position: fixed !important`
- `sw.js` : Même correction base path

### 3. Problèmes rencontrés
- Le onclick `window.walkthrough.next()` appelait initialement `nextStep()` non exportée
- Corrigé : remplacé par écouteur `addEventListener` sur `walkthrough-next`
- Les IDs cibles (#pose-results, #flash-results...) existent mais peuvent ne pas être visibles

### 4. STATE ACTUEL DU CODE
```javascript
// src/walkthrough.js
let currentStep = 0;

function nextStep() {
    currentStep++;
    if (currentStep < STEPS.length) {
        showWalkthroughStep();
    } else {
        completeWalkthrough();
    }
}

window.walkthrough = { next: nextStep, prev };

// Bouton Suivant (dans innerHTML)
document.getElementById('walkthrough-next').onclick = function(e) {
    e.preventDefault();
    nextStep();
};
```

## PISTES POSSIBLES
1. Le popup est créé mais `display: none` est appliqué par CSS ou autre code
2. Conflit avec les styles existants dans styles.css
3. L'élément `#pose-results` n'est pas visible (dans onglet non-actif)

## TESTER
```bash
npx http-server -p 8000
# Dans console : localStorage.removeItem('walkthroughCompleted')
```