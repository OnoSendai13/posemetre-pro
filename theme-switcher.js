/**
 * THEME SWITCHER - Gestion du mode clair/sombre
 * 
 * Fonctionnalités :
 * - Détection automatique de la préférence système
 * - Sauvegarde du choix utilisateur dans localStorage
 * - Toggle manuel entre les thèmes (cycle 3 états)
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
     * Récupère le thème sauvegardé ou utilise la préférence système
     * @returns {string} 'light' ou 'dark'
     */
    function getSavedTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved) {
            return saved;
        }
        
        // Si pas de thème sauvegardé, utiliser préférence système
        const systemTheme = getSystemTheme();
        localStorage.setItem(THEME_KEY, systemTheme);
        localStorage.setItem(THEME_AUTO_KEY, 'true');
        return systemTheme;
    }
    
    /**
     * Applique le thème au document
     * @param {string} theme - 'light' ou 'dark'
     */
    function applyTheme(theme) {
        // Appliquer l'attribut data-theme
        document.documentElement.setAttribute('data-theme', theme);
        
        // Mettre à jour la couleur de la barre de statut (mobile)
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#81c784');
        }
        
        // Sauvegarder le choix
        localStorage.setItem(THEME_KEY, theme);
        
        // Mettre à jour l'icône du bouton
        updateThemeButtonIcon(theme);
        
        // Log pour debug
        console.log(`Theme applied: ${theme}`);
    }
    
    /**
     * Met à jour l'icône du bouton de switch
     */
    function updateThemeButtonIcon() {
        const button = document.getElementById('theme-toggle');
        if (!button) return;
        
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        const isAuto = localStorage.getItem(THEME_AUTO_KEY) === 'true';
        
        if (isAuto) {
            button.textContent = '🔄';
            button.setAttribute('aria-label', 'Thème système (cliquer pour changer)');
            button.classList.add('auto-mode');
        } else {
            button.textContent = theme === 'light' ? '🌙' : '☀️';
            button.setAttribute('aria-label', 
                theme === 'light' ? 'Mode clair (cliquer pour mode sombre)' : 'Mode sombre (cliquer pour mode système)'
            );
            button.classList.remove('auto-mode');
        }
    }
    
    /**
     * Toggle entre les thèmes (cycle 3 états: light → dark → system → light)
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const isAuto = localStorage.getItem(THEME_AUTO_KEY) === 'true';
        
        let newTheme, newAuto;
        
        if (isAuto) {
            // system → light
            newTheme = 'light';
            newAuto = false;
        } else if (currentTheme === 'light') {
            // light → dark
            newTheme = 'dark';
            newAuto = false;
        } else {
            // dark → system
            newTheme = getSystemTheme();
            newAuto = true;
        }
        
        localStorage.setItem(THEME_AUTO_KEY, newAuto ? 'true' : 'false');
        
        document.documentElement.classList.add('theme-transitioning');
        applyTheme(newTheme);
        
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
            updateThemeButtonIcon();
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
            if (autoMode === 'true') {
                const newTheme = e.matches ? 'dark' : 'light';
                applyTheme(newTheme);
                updateThemeButtonIcon();
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
        // Appliquer le thème sauvegardé ou système
        const initialTheme = getSavedTheme();
        applyTheme(initialTheme);
        
        // Écouter les changements système
        watchSystemTheme();
        
        // Ajouter l'event listener au bouton de toggle (après chargement DOM)
        document.addEventListener('DOMContentLoaded', () => {
            const button = document.getElementById('theme-toggle');
            if (button) {
                button.addEventListener('click', toggleTheme);
                updateThemeButtonIcon();
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
        set: applyTheme,
        get: () => document.documentElement.getAttribute('data-theme') || 'dark',
        getSystem: getSystemTheme
    };
    
})();