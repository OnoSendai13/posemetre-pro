// ============================================
// SYSTÈME D'INTERNATIONALISATION (i18n)
// ============================================

const LANG_KEY = 'app-language';

// Traductions
const translations = {
    fr: {
        // Header
        appTitle: '📷 Assistant Posemètre Pro',
        helpBtn: '?',
        themeBtn: 'Changer de thème',
        
        // Navigation
        navPosemetre: '📷 Posemètre',
        navFlash: '⚡ Flash',
        navRatios: '💡 Ratios',
        navEstimation: '📊 Estimation',
        
        // Mode Posemètre
        posemetreTitle: 'Mode Posemètre (Lumière continue)',
        labelMesureInitiale: 'Mesure initiale (Ouverture):',
        labelISO: 'ISO:',
        labelVitesse: 'Vitesse:',
        labelCompensation: 'Compensation d\'exposition:',
        resultsSuggeres: '🎯 Réglages suggérés',
        
        // Mode Flash
        flashTitle: 'Mode Flashmètre',
        labelVitesseSync: 'Vitesse sync:',
        labelMesureFlash: 'Mesure flash actuelle:',
        labelOuvertureSouhaitee: 'Ouverture souhaitée:',
        labelPuissanceActuelle: 'Puissance flash actuelle:',
        labelHSSEnabled: 'Mode HSS (High-Speed Sync)',
        labelHSSSyncMax: 'Vitesse sync max:',
        resultsFlash: '⚡ Ajuster le flash à',
        
        // Mode Ratios
        ratiosTitle: 'Mode Ratios Key/Fill',
        labelKeyLight: 'Key Light (mesure):',
        labelRatioFill: 'Ratio Fill vs Key:',
        resultsFill: '💡 Fill Light à régler',
        
        // Mode Estimation
        estimationTitle: 'Mode Estimation (sans posemètre)',
        labelZoneMesuree: 'Zone mesurée:',
        labelLectureAppareil: 'Lecture appareil (f/):',
        resultsEstimation: '📊 Lumière incidente estimée',
        gridTitle: '📋 Grille de réflectance (Exemples concrets)',
        
        // Zones IL
        zone5: '+5 IL - Blanc pur, Neige plein soleil',
        zone4: '+4 IL - Blanc neige à l\'ombre',
        zone3: '+3 IL - Écorce de bouleau, Tronc clair',
        zone2: '+2 IL - Peau très claire, Pierre claire',
        zone1: '+1 IL - Peau claire caucasienne, Sable',
        zone0: '0 IL (Zone V) - Gris 18%, Béton, Herbe verte',
        zoneM1: '-1 IL - Peau foncée, Feuillage ombre',
        zoneM2: '-2 IL - Pierre sombre, Asphalte',
        zoneM3: '-3 IL - Écorce sombre, Ombres profondes',
        zoneM4: '-4 IL - Noir profond, Ombres très denses',
        
        // Compensation buttons
        compValue: '{value} IL',
        
        // Results
        resultOption1: 'Option 1: Modifier l\'ouverture',
        resultOption2: 'Option 2: Modifier la vitesse',
        resultOption3: 'Option 3: Modifier l\'ISO',
        resultAjustement: 'Ajustement de puissance',
        resultDifference: 'Différence totale',
        resultCompensation: 'Compensation appliquée',
        
        // HSS
        hssWarning: 'Rappel HSS',
        hssInfo: 'Perte estimée: ~{loss} IL. Ces réglages tiennent compte de votre mesure en HSS. Si les réglages sont difficiles, essayez en sync normale ({speed}) et remesurez.',
        
        // Footer
        footerInstall: '📱 Installer l\'application',
        footerText: 'Assistant Posemètre Pro v1.0 | Développé pour Laurent',
        
        // Modal Aide
        helpTitle: '📖 Aide',
        helpNavGeneral: 'Général',
        helpNavPosemetre: 'Posemètre',
        helpNavFlash: 'Flash',
        helpNavRatios: 'Ratios',
        helpNavEstimation: 'Estimation',
        
        // Aide - Section Générale
        helpGeneralTitle: '🎯 Principe général',
        helpGeneralIntro: 'Cette application est un <strong>assistant pour posemètre/flashmètre</strong>. Elle vous aide à calculer les réglages de votre appareil photo à partir d\'une mesure de lumière <strong>incidente</strong>.',
        helpManualModeTitle: '⚠ Mode Manuel requis',
        helpManualModeText: 'Ce raisonnement n\'est totalement applicable qu\'en <strong>mode Manuel (M)</strong>. Dans les modes semi-automatiques (Av, Tv, P), vous ne contrôlez qu\'un paramètre et devez utiliser la fonction <strong>compensation d\'exposition</strong> propre à votre appareil. Vous êtes alors davantage soumis à la règle du gris 18% sur mesure de lumière réfléchie.',
        helpManualModeNote: '<strong>À noter :</strong> l\'affichage sur l\'écran de l\'appareil (image et histogramme) est un JPEG construit à la volée avec une courbe de tonalité standard. Il ne reflète pas la réalité des données contenues dans le fichier RAW.',
        helpLightTitle: 'Lumière incidente vs réfléchie',
        helpLightIncident: '<strong>Incidente</strong> : mesure la lumière qui ARRIVE sur le sujet (avec dôme blanc, posemètre vers la source).',
        helpLightReflected: '<strong>Réfléchie</strong> : mesure la lumière RENVOYÉE par le sujet (= mesure par la cellule de l\'appareil photo).',
        helpLightConclusion: 'Cette app travaille avec la mesure <strong>incidente</strong>, plus fiable car indépendante de la couleur/réflectance du sujet.',
        helpTriangleTitle: 'Le triangle d\'exposition',
        helpTriangleIntro: 'Trois paramètres liés contrôlent l\'exposition :',
        helpTriangleAperture: '<strong>Ouverture (f/)</strong> : contrôle la quantité de lumière + profondeur de champ',
        helpTriangleSpeed: '<strong>Vitesse</strong> : contrôle le temps d\'exposition + figé/flou de mouvement',
        helpTriangleISO: '<strong>ISO</strong> : sensibilité du capteur (plus = plus de bruit)',
        helpTriangleConclusion: 'Modifier un paramètre d\'1 IL (indice de lumination) = doubler ou diviser la lumière par 2.',
        
        // Aide - Section Posemètre
        helpPosemetreTitle: '📷 Mode Posemètre (lumière continue)',
        helpPosemetreIntro: 'Pour la photo en lumière naturelle ou continue (LED, tungstène...).',
        helpPosemetreUsageTitle: 'Utilisation',
        helpPosemetreUsage1: 'Mesurez la lumière incidente avec votre posemètre',
        helpPosemetreUsage2: 'Entrez l\'ouverture indiquée (ex: f/5.6)',
        helpPosemetreUsage3: 'Sélectionnez votre ISO et vitesse de base',
        helpPosemetreUsage4: 'L\'app calcule les réglages équivalents',
        helpPosemetreCompTitle: 'Compensation d\'exposition',
        helpPosemetreCompIntro: 'Utilisez la compensation pour :',
        helpPosemetreCompPlus: '<strong>+IL</strong> : surexposer (plus clair) - utile pour high-key, peaux claires',
        helpPosemetreCompMinus: '<strong>-IL</strong> : sous-exposer (plus sombre) - utile pour low-key, ambiances',
        helpPosemetreCompConclusion: 'Les 3 options proposées sont équivalentes en terme d\'exposition, choisissez selon votre priorité créative (profondeur de champ, mouvement, bruit).',
        
        // Aide - Section Flash
        helpFlashTitle: '⚡ Mode Flash',
        helpFlashIntro: 'Pour le travail au flash de studio ou cobra.',
        helpFlashConceptTitle: '⚠ Concept important : f/X a double sens',
        helpFlashConceptSetting: '<strong>f/X comme réglage</strong> : l\'ouverture à appliquer sur votre appareil (ex: "réglez f/8")',
        helpFlashConceptMeasure: '<strong>f/X comme mesure</strong> : indique l\'intensité lumineuse du flash. Un flash qui "donne f/11" est plus puissant qu\'un flash qui "donne f/5.6".',
        helpFlashConceptConclusion: 'Dans cette app, la <strong>mesure flash</strong> = ce que votre flashmètre indique. L\'<strong>ouverture souhaitée</strong> = le réglage que vous voulez utiliser dans votre choix artistique.',
        helpFlashWorkflowTitle: 'Workflow typique',
        helpFlashWorkflow1: 'Réglez votre flash à une puissance de départ',
        helpFlashWorkflow2: 'Mesurez au flashmètre → notez le f/X indiqué',
        helpFlashWorkflow3: 'Entrez cette mesure et l\'ouverture que vous souhaitez',
        helpFlashWorkflow4: 'L\'app vous dit de combien ajuster la puissance',
        helpFlashModeTitle: 'Mode IL vs Fractions',
        helpFlashModeIL: '<strong>IL</strong> : ajustement en indices de lumination (style Profoto, Broncolor)',
        helpFlashModeFractions: '<strong>Fractions</strong> : ajustement en fractions de puissance (1/1, 1/2, 1/4... style Godox, Neewer)',
        helpFlashHSSTitle: 'Mode HSS (High-Speed Sync)',
        helpFlashHSSIntro: 'Permet de shooter au-dessus de la vitesse de synchro (ex: 1/1000 au lieu de 1/250).',
        helpFlashHSSWarning: '<strong>Attention</strong> : le HSS cause une perte de puissance importante (~2-4 IL). La mesure doit être faite dans les conditions réelles (en HSS si vous shootez en HSS).',
        
        // Aide - Section Ratios
        helpRatiosTitle: '💡 Mode Ratios Key/Fill',
        helpRatiosIntro: 'Pour gérer l\'éclairage à plusieurs sources.',
        helpRatiosKeyFillTitle: 'Key et Fill light',
        helpRatiosKey: '<strong>Key light</strong> : source principale, définit l\'exposition de base',
        helpRatiosFill: '<strong>Fill light</strong> : source secondaire, débouche les ombres',
        helpRatiosCommonTitle: 'Ratios courants',
        helpRatios1to1: '<strong>1:1</strong> (0 IL) : éclairage plat, pas d\'ombre',
        helpRatios2to1: '<strong>2:1</strong> (-1 IL) : léger contraste, portrait flatteur',
        helpRatios4to1: '<strong>4:1</strong> (-2 IL) : contraste marqué, portrait dramatique',
        helpRatios8to1: '<strong>8:1</strong> (-3 IL) : fort contraste, clair-obscur',
        helpRatiosConclusion: 'Entrez la mesure de votre Key light et le ratio souhaité, l\'app calcule à quel f/ doit être réglée votre Fill light.',
        
        // Aide - Section Estimation
        helpEstimationTitle: '📊 Mode Estimation (sans posemètre)',
        helpEstimationIntro: 'Pour estimer l\'exposition sans posemètre, en utilisant la mesure spot de votre appareil sur une zone de référence.',
        helpEstimationPrincipleTitle: 'Principe',
        helpEstimationPrinciple1: 'La cellule de votre appareil suppose que tout est "gris 18%". Si vous mesurez une zone plus claire ou plus sombre, elle se trompe.',
        helpEstimationPrinciple2: 'Cette app corrige l\'erreur en fonction de la zone mesurée.',
        helpEstimationHowTitle: 'Comment faire',
        helpEstimationHow1: 'Passez en mode spot sur votre appareil',
        helpEstimationHow2: 'Visez une zone de référence (peau, mur, ciel...)',
        helpEstimationHow3: 'Notez l\'ouverture suggérée par l\'appareil',
        helpEstimationHow4: 'Sélectionnez le type de zone dans l\'app',
        helpEstimationHow5: 'L\'app corrige et donne l\'exposition réelle',
        helpEstimationZonesTitle: 'Zones de référence courantes',
        helpEstimationZoneGray: '<strong>Gris 18%</strong> (0 IL) : béton, herbe verte, feuillage',
        helpEstimationZoneLightSkin: '<strong>Peau claire</strong> (+1 IL) : caucasien éclairé',
        helpEstimationZoneDarkSkin: '<strong>Peau foncée</strong> (-1 IL) : peau noire, ombre',
        helpEstimationZoneWhite: '<strong>Blanc</strong> (+2 à +5 IL) : neige, mur blanc',
        helpEstimationZoneBlack: '<strong>Noir</strong> (-2 à -4 IL) : asphalte, ombres profondes'
    },
    
    en: {
        // Header
        appTitle: '📷 Light Meter Pro Assistant',
        helpBtn: '?',
        themeBtn: 'Change theme',
        
        // Navigation
        navPosemetre: '📷 Light Meter',
        navFlash: '⚡ Flash',
        navRatios: '💡 Ratios',
        navEstimation: '📊 Estimation',
        
        // Mode Posemètre
        posemetreTitle: 'Light Meter Mode (Continuous Light)',
        labelMesureInitiale: 'Initial reading (Aperture):',
        labelISO: 'ISO:',
        labelVitesse: 'Shutter Speed:',
        labelCompensation: 'Exposure Compensation:',
        resultsSuggeres: '🎯 Suggested Settings',
        
        // Mode Flash
        flashTitle: 'Flash Meter Mode',
        labelVitesseSync: 'Sync speed:',
        labelMesureFlash: 'Current flash reading:',
        labelOuvertureSouhaitee: 'Desired aperture:',
        labelPuissanceActuelle: 'Current flash power:',
        labelHSSEnabled: 'HSS Mode (High-Speed Sync)',
        labelHSSSyncMax: 'Max sync speed:',
        resultsFlash: '⚡ Adjust flash to',
        
        // Mode Ratios
        ratiosTitle: 'Key/Fill Ratios Mode',
        labelKeyLight: 'Key Light (reading):',
        labelRatioFill: 'Fill vs Key ratio:',
        resultsFill: '💡 Set Fill Light to',
        
        // Mode Estimation
        estimationTitle: 'Estimation Mode (no light meter)',
        labelZoneMesuree: 'Metered zone:',
        labelLectureAppareil: 'Camera reading (f/):',
        resultsEstimation: '📊 Estimated incident light',
        gridTitle: '📋 Reflectance Chart (Practical Examples)',
        
        // Zones IL
        zone5: '+5 EV - Pure white, Snow in full sun',
        zone4: '+4 EV - Snow in shade',
        zone3: '+3 EV - Birch bark, Light tree trunk',
        zone2: '+2 EV - Very light skin, Light stone',
        zone1: '+1 EV - Light caucasian skin, Sand',
        zone0: '0 EV (Zone V) - 18% gray, Concrete, Green grass',
        zoneM1: '-1 EV - Dark skin, Foliage in shade',
        zoneM2: '-2 EV - Dark stone, Asphalt',
        zoneM3: '-3 EV - Dark bark, Deep shadows',
        zoneM4: '-4 EV - Deep black, Very dense shadows',
        
        // Compensation buttons
        compValue: '{value} EV',
        
        // Results
        resultOption1: 'Option 1: Change aperture',
        resultOption2: 'Option 2: Change shutter speed',
        resultOption3: 'Option 3: Change ISO',
        resultAjustement: 'Power adjustment',
        resultDifference: 'Total difference',
        resultCompensation: 'Applied compensation',
        
        // HSS
        hssWarning: 'HSS Reminder',
        hssInfo: 'Estimated loss: ~{loss} EV. These settings account for your HSS reading. If settings are difficult, try normal sync ({speed}) and re-measure.',
        
        // Footer
        footerInstall: '📱 Install app',
        footerText: 'Light Meter Pro Assistant v1.0 | Developed for Laurent',
        
        // Modal Aide
        helpTitle: '📖 Help',
        helpNavGeneral: 'General',
        helpNavPosemetre: 'Light Meter',
        helpNavFlash: 'Flash',
        helpNavRatios: 'Ratios',
        helpNavEstimation: 'Estimation',
        
        // Aide - Section Générale
        helpGeneralTitle: '🎯 General Principle',
        helpGeneralIntro: 'This application is a <strong>light meter/flash meter assistant</strong>. It helps you calculate your camera settings from an <strong>incident</strong> light reading.',
        helpManualModeTitle: '⚠ Manual Mode Required',
        helpManualModeText: 'This reasoning is only fully applicable in <strong>Manual mode (M)</strong>. In semi-automatic modes (Av, Tv, P), you only control one parameter and must use your camera\'s built-in <strong>exposure compensation</strong> function. You are then more subject to the 18% gray rule on reflected light metering.',
        helpManualModeNote: '<strong>Note:</strong> The display on your camera screen (image and histogram) is a JPEG built on-the-fly with a standard tone curve. It does not reflect the actual data contained in the RAW file.',
        helpLightTitle: 'Incident vs Reflected Light',
        helpLightIncident: '<strong>Incident</strong>: measures the light ARRIVING on the subject (with white dome, meter pointing toward the source).',
        helpLightReflected: '<strong>Reflected</strong>: measures the light BOUNCED BACK by the subject (= camera\'s built-in meter reading).',
        helpLightConclusion: 'This app works with <strong>incident</strong> metering, more reliable as it\'s independent of the subject\'s color/reflectance.',
        helpTriangleTitle: 'The Exposure Triangle',
        helpTriangleIntro: 'Three linked parameters control exposure:',
        helpTriangleAperture: '<strong>Aperture (f/)</strong>: controls light quantity + depth of field',
        helpTriangleSpeed: '<strong>Shutter Speed</strong>: controls exposure time + freeze/blur motion',
        helpTriangleISO: '<strong>ISO</strong>: sensor sensitivity (higher = more noise)',
        helpTriangleConclusion: 'Changing one parameter by 1 EV (exposure value) = doubling or halving the light.',
        
        // Aide - Section Posemètre
        helpPosemetreTitle: '📷 Light Meter Mode (continuous light)',
        helpPosemetreIntro: 'For photography in natural or continuous light (LED, tungsten...).',
        helpPosemetreUsageTitle: 'How to use',
        helpPosemetreUsage1: 'Measure incident light with your light meter',
        helpPosemetreUsage2: 'Enter the indicated aperture (e.g., f/5.6)',
        helpPosemetreUsage3: 'Select your base ISO and shutter speed',
        helpPosemetreUsage4: 'The app calculates equivalent settings',
        helpPosemetreCompTitle: 'Exposure Compensation',
        helpPosemetreCompIntro: 'Use compensation for:',
        helpPosemetreCompPlus: '<strong>+EV</strong>: overexpose (brighter) - useful for high-key, light skin',
        helpPosemetreCompMinus: '<strong>-EV</strong>: underexpose (darker) - useful for low-key, moody shots',
        helpPosemetreCompConclusion: 'The 3 options offered are equivalent in terms of exposure, choose according to your creative priority (depth of field, motion, noise).',
        
        // Aide - Section Flash
        helpFlashTitle: '⚡ Flash Mode',
        helpFlashIntro: 'For working with studio or speedlight flash.',
        helpFlashConceptTitle: '⚠ Important concept: f/X has dual meaning',
        helpFlashConceptSetting: '<strong>f/X as setting</strong>: the aperture to set on your camera (e.g., "set f/8")',
        helpFlashConceptMeasure: '<strong>f/X as measurement</strong>: indicates the flash light intensity. A flash that "gives f/11" is more powerful than one that "gives f/5.6".',
        helpFlashConceptConclusion: 'In this app, <strong>flash reading</strong> = what your flash meter shows. <strong>Desired aperture</strong> = the setting you want to use for your artistic choice.',
        helpFlashWorkflowTitle: 'Typical Workflow',
        helpFlashWorkflow1: 'Set your flash to a starting power',
        helpFlashWorkflow2: 'Measure with flash meter → note the indicated f/X',
        helpFlashWorkflow3: 'Enter this reading and the aperture you want',
        helpFlashWorkflow4: 'The app tells you how much to adjust the power',
        helpFlashModeTitle: 'EV Mode vs Fractions',
        helpFlashModeIL: '<strong>EV</strong>: adjustment in exposure values (Profoto, Broncolor style)',
        helpFlashModeFractions: '<strong>Fractions</strong>: adjustment in power fractions (1/1, 1/2, 1/4... Godox, Neewer style)',
        helpFlashHSSTitle: 'HSS Mode (High-Speed Sync)',
        helpFlashHSSIntro: 'Allows shooting above sync speed (e.g., 1/1000 instead of 1/250).',
        helpFlashHSSWarning: '<strong>Warning</strong>: HSS causes significant power loss (~2-4 EV). The reading must be taken in actual shooting conditions (in HSS if you\'re shooting in HSS).',
        
        // Aide - Section Ratios
        helpRatiosTitle: '💡 Key/Fill Ratios Mode',
        helpRatiosIntro: 'For managing multi-source lighting.',
        helpRatiosKeyFillTitle: 'Key and Fill light',
        helpRatiosKey: '<strong>Key light</strong>: main source, defines base exposure',
        helpRatiosFill: '<strong>Fill light</strong>: secondary source, opens up shadows',
        helpRatiosCommonTitle: 'Common Ratios',
        helpRatios1to1: '<strong>1:1</strong> (0 EV): flat lighting, no shadow',
        helpRatios2to1: '<strong>2:1</strong> (-1 EV): slight contrast, flattering portrait',
        helpRatios4to1: '<strong>4:1</strong> (-2 EV): marked contrast, dramatic portrait',
        helpRatios8to1: '<strong>8:1</strong> (-3 EV): strong contrast, chiaroscuro',
        helpRatiosConclusion: 'Enter your Key light reading and desired ratio, the app calculates what f/ your Fill light should be set to.',
        
        // Aide - Section Estimation
        helpEstimationTitle: '📊 Estimation Mode (no light meter)',
        helpEstimationIntro: 'To estimate exposure without a light meter, using your camera\'s spot metering on a reference zone.',
        helpEstimationPrincipleTitle: 'Principle',
        helpEstimationPrinciple1: 'Your camera\'s meter assumes everything is "18% gray". If you meter a lighter or darker zone, it will be wrong.',
        helpEstimationPrinciple2: 'This app corrects the error based on the metered zone.',
        helpEstimationHowTitle: 'How to do it',
        helpEstimationHow1: 'Switch to spot metering mode on your camera',
        helpEstimationHow2: 'Aim at a reference zone (skin, wall, sky...)',
        helpEstimationHow3: 'Note the aperture suggested by the camera',
        helpEstimationHow4: 'Select the zone type in the app',
        helpEstimationHow5: 'The app corrects and gives the actual exposure',
        helpEstimationZonesTitle: 'Common Reference Zones',
        helpEstimationZoneGray: '<strong>18% Gray</strong> (0 EV): concrete, green grass, foliage',
        helpEstimationZoneLightSkin: '<strong>Light skin</strong> (+1 EV): lit caucasian',
        helpEstimationZoneDarkSkin: '<strong>Dark skin</strong> (-1 EV): black skin, shadow',
        helpEstimationZoneWhite: '<strong>White</strong> (+2 to +5 EV): snow, white wall',
        helpEstimationZoneBlack: '<strong>Black</strong> (-2 to -4 EV): asphalt, deep shadows'
    }
};

// Langue courante
let currentLang = localStorage.getItem(LANG_KEY) || 'fr';

/**
 * Détecte la langue du navigateur
 */
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) return 'en';
    return 'fr'; // Français par défaut
}

/**
 * Initialise la langue
 */
function initLanguage() {
    const savedLang = localStorage.getItem(LANG_KEY);
    if (!savedLang) {
        currentLang = detectBrowserLanguage();
        localStorage.setItem(LANG_KEY, currentLang);
    } else {
        currentLang = savedLang;
    }
    return currentLang;
}

/**
 * Obtient une traduction
 */
function t(key, params = {}) {
    let text = translations[currentLang]?.[key] || translations['fr'][key] || key;
    
    // Remplacer les paramètres {param}
    Object.keys(params).forEach(param => {
        text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
    });
    
    return text;
}

/**
 * Change la langue
 */
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem(LANG_KEY, lang);
        applyTranslations();
        updateLanguageButton();
        console.log('Language changed to:', lang);
    }
}

/**
 * Obtient la langue courante
 */
function getLanguage() {
    return currentLang;
}

/**
 * Bascule entre les langues
 */
function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
}

/**
 * Met à jour le bouton de langue
 */
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        langBtn.title = currentLang === 'fr' ? 'Switch to English' : 'Passer en français';
    }
}

/**
 * Applique les traductions à tous les éléments avec data-i18n
 */
function applyTranslations() {
    // Éléments avec data-i18n (texte)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translation;
        } else {
            el.innerHTML = translation;
        }
    });
    
    // Éléments avec data-i18n-title (attribut title)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
    
    // Éléments avec data-i18n-label (pour les labels)
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        el.setAttribute('aria-label', t(key));
    });
    
    // Mettre à jour le titre de la page
    document.title = t('appTitle').replace(/[📷⚡💡📊🎯📋📱📖]/g, '').trim();
}

/**
 * Initialise le système i18n
 */
function initI18n() {
    initLanguage();
    
    // Ajouter l'écouteur pour le bouton de langue
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
    // Appliquer les traductions initiales
    applyTranslations();
    updateLanguageButton();
    
    console.log('i18n initialized, language:', currentLang);
}

// Export pour utilisation globale
window.i18n = {
    t,
    setLanguage,
    getLanguage,
    toggleLanguage,
    applyTranslations,
    initI18n
};
