/**
 * THEME SWITCHER - Gestion du mode clair/sombre
 * 
 * Fonctionnalités :
 * - Détection automatique de la préférence système
 * - Sauvegarde du choix utilisateur dans localStorage
 * - Toggle manuel entre les thèmes (Auto -> Clair -> Sombre)
 * - Mise à jour de l'icône du bouton
 * - Transition douce entre les thèmes
 */

(function() {
    'use strict';
    
    // Clés localStorage
    const THEME_KEY = 'app-theme';
    const THEME_AUTO_KEY = 'app-theme-auto';
    
    /**
     * Détecte la préférence système de l'utilisateur
     * @returns {string} 'light' ou 'dark'
     */
    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    /**
     * Récupère l'état complet du thème
     * @returns {string} 'auto', 'light' ou 'dark'
     */
    function getSavedThemeState() {
        const isAuto = localStorage.getItem(THEME_AUTO_KEY);
        // Si explicitly true, ou première visite (null et pas de theme key)
        if (isAuto === 'true' || isAuto === null) {
            return 'auto';
        }
        
        const saved = localStorage.getItem(THEME_KEY);
        if (saved) {
            return saved;
        }
        
        return 'auto';
    }
    
    /**
     * Applique l'état du thème
     * @param {string} state - 'auto', 'light' ou 'dark'
     */
    function applyThemeState(state) {
        let actualTheme;
        if (state === 'auto') {
            actualTheme = getSystemTheme();
            localStorage.setItem(THEME_AUTO_KEY, 'true');
        } else {
            actualTheme = state;
            localStorage.setItem(THEME_AUTO_KEY, 'false');
            localStorage.setItem(THEME_KEY, state);
        }
        
        // Appliquer l'attribut data-theme
        document.documentElement.setAttribute('data-theme', actualTheme);
        
        // Mettre à jour la couleur de la barre de statut (mobile)
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', actualTheme === 'dark' ? '#1a1a1a' : '#81c784');
        }
        
        // Mettre à jour l'icône du bouton
        updateThemeButtonIcon(state);
        
        // Log pour debug
        console.log(`Theme state applied: ${state} (Rendered as: ${actualTheme})`);
    }
    
    /**
     * Met à jour l'icône du bouton de switch
     * @param {string} state - 'auto', 'light' ou 'dark'
     */
    function updateThemeButtonIcon(state) {
        const button = document.getElementById('theme-toggle');
        if (!button) return;
        
        const lang = (window.i18n && window.i18n.getLanguage) ? window.i18n.getLanguage() : 'fr';
        
        if (state === 'auto') {
            button.textContent = '🌓';
            button.setAttribute('aria-label', 'Mode système (auto)');
            button.setAttribute('data-i18n-title', 'themeAuto');
            button.title = lang === 'fr' ? 'Système (Auto)' : 'System (Auto)';
        } else if (state === 'light') {
            button.textContent = '☀️';
            button.setAttribute('aria-label', 'Mode clair (forcer)');
            button.setAttribute('data-i18n-title', 'themeLight');
            button.title = lang === 'fr' ? 'Mode Clair' : 'Light Mode';
        } else {
            button.textContent = '🌙';
            button.setAttribute('aria-label', 'Mode sombre (forcer)');
            button.setAttribute('data-i18n-title', 'themeDark');
            button.title = lang === 'fr' ? 'Mode Sombre' : 'Dark Mode';
        }
    }
    
    /**
     * Toggle entre les thèmes
     */
    function toggleTheme() {
        const currentState = getSavedThemeState();
        let nextState;
        
        // Cycle : Auto -> Clair -> Sombre -> Auto
        if (currentState === 'auto') {
            nextState = 'light';
        } else if (currentState === 'light') {
            nextState = 'dark';
        } else {
            nextState = 'auto';
        }
        
        // Appliquer le nouveau thème avec transition
        document.documentElement.classList.add('theme-transitioning');
        applyThemeState(nextState);
        
        // Retirer la classe de transition après l'animation
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 300);
    }
    
    /**
     * Écoute les changements de préférence système
     */
    function watchSystemTheme() {
        if (!window.matchMedia) return;
        
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Fonction de callback pour les changements
        const handleChange = (e) => {
            // Ne changer que si mode auto est actif
            const autoMode = localStorage.getItem(THEME_AUTO_KEY);
            if (autoMode === 'true' || autoMode === null) {
                applyThemeState('auto');
            }
        };
        
        // Écouter les changements (API moderne)
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else if (mediaQuery.addListener) {
            // Fallback pour anciens navigateurs
            mediaQuery.addListener(handleChange);
        }
    }
    
    /**
     * Initialisation du theme switcher
     */
    function initThemeSwitcher() {
        // Appliquer l'état sauvegardé ou système
        const initialState = getSavedThemeState();
        applyThemeState(initialState);
        
        // Écouter les changements système
        watchSystemTheme();
        
        // Ajouter l'event listener au bouton de toggle (après chargement DOM)
        document.addEventListener('DOMContentLoaded', () => {
            const button = document.getElementById('theme-toggle');
            if (button) {
                button.addEventListener('click', toggleTheme);
                // Re-appliquer l'état pour s'assurer que l'icône et le titre sont corrects
                const currentState = getSavedThemeState();
                updateThemeButtonIcon(currentState);
            } else {
                console.warn('Theme toggle button not found');
            }
        });
        
        // Log pour debug
        console.log('Theme switcher initialized');
    }
    
    // Initialiser immédiatement (avant chargement DOM pour éviter flash)
    initThemeSwitcher();
    
    // Exposer les fonctions globalement pour usage externe
    window.themeSwitcher = {
        toggle: toggleTheme,
        set: applyThemeState,
        get: getSavedThemeState,
        getSystem: getSystemTheme
    };
    
})();
