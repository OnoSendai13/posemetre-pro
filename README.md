<div align="center">

![Assistant Posemètre Pro Banner](https://www.genspark.ai/api/files/s/cAJRFf6h?cache_control=3600)

# 📷 Assistant Posemètre Pro

### Application PWA professionnelle pour photographes exigeants

[![PWA](https://img.shields.io/badge/PWA-Progressive%20Web%20App-5A0FC8?style=for-the-badge)](https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0-blue?style=for-the-badge)](https://github.com/laurent/lightmeter-app-pwa/releases)
[![Size](https://img.shields.io/badge/size-26KB-orange?style=for-the-badge)](https://github.com/laurent/lightmeter-app-pwa)

[📱 Démo](#-installation) • [✨ Fonctionnalités](#-fonctionnalités) • [📖 Documentation](#-utilisation) • [🤝 Contribuer](#-contribution)

---

</div>

## 🎯 Présentation

**Assistant Posemètre Pro** est une application web progressive (PWA) développée spécifiquement pour les photographes professionnels. Elle offre quatre modes de mesure et de calcul d'exposition, avec une interface optimisée pour smartphone et un fonctionnement hors ligne.

### 🌟 Points forts

- ✅ **4 modes complets** : Posemètre, Flashmètre, Ratios Key/Fill, Estimation
- ✅ **Fonctionne offline** après installation
- ✅ **Léger** : seulement 26 Ko
- ✅ **0 dépendance** : JavaScript vanilla pur
- ✅ **Précis** : Calculs basés sur les standards photographiques professionnels
- ✅ **Gratuit** et open source

---

## 📱 Les 4 Modes

![4 Modes de l'application](https://www.genspark.ai/api/files/s/9Sc5vB9i?cache_control=3600)

### 1. 📷 Mode Posemètre (Lumière continue)

Calcul d'exposition pour lumière continue avec compensation d'exposition.

**Fonctionnalités :**
- Mesure d'ouverture, ISO et vitesse personnalisables
- Compensation d'exposition **-2 IL à +3 IL** par tiers
- 3 suggestions automatiques :
  - Modifier l'ouverture
  - Modifier la vitesse  
  - Modifier l'ISO
- Calculs instantanés en temps réel

**Cas d'usage :** Portrait en lumière naturelle, paysage, street photography

---

### 2. ⚡ Mode Flashmètre

Calcul de puissance flash avec support IL (Profoto) et Fractions (autres marques).

**Fonctionnalités :**
- **Switch IL/Fractions** contextuel
- **Mode IL** : Affichage en dixièmes (ex: +1.3 IL) pour flashs Profoto
- **Mode Fractions** : 
  - Sélection puissance actuelle (1/1 à 1/256)
  - Calcul de la puissance cible
  - Affichage "Régler de 1/2 à 1/2.8"
- Vitesse de synchronisation réglable
- Compensation supplémentaire

**Cas d'usage :** Studio, flash de reportage, Profoto/Godox/Elinchrom

---

### 3. 💡 Mode Ratios Key/Fill Light

Gestion professionnelle des ratios d'éclairage pour studio.

**Fonctionnalités :**
- Réglage Key Light de référence
- Calcul automatique Fill Light selon ratio (-3 à -0.5 IL)
- Ratio d'éclairage final (ex: 4:1, 2:1)
- Affichage en IL ou fractions selon mode sélectionné

**Cas d'usage :** Portrait studio, éclairage produit, interviews vidéo

---

### 4. 📊 Mode Estimation (Sans posemètre)

Estimation de lumière incidente à partir d'une mesure spot avec grille de réflectance enrichie.

**Fonctionnalités :**
- **Grille de réflectance complète** avec exemples concrets du quotidien
- 12 zones du Zone System d'Ansel Adams
- Gris 18% expliqué : Béton, Herbe verte, Feuillage, Bois patiné
- Compensation d'exposition
- 3 suggestions de réglages alternatifs

**Cas d'usage :** Shooting sans posemètre, situations d'urgence, apprentissage Zone System

---

## 🎨 Grille de Réflectance

![Zone System avec exemples concrets](https://www.genspark.ai/api/files/s/DGw4fn4N?cache_control=3600)

### Exemples concrets du quotidien

| Zone | Valeur IL | Exemples que vous rencontrez sur le terrain |
|------|-----------|---------------------------------------------|
| **Zone X** | +5 IL | Blanc pur, **Neige en plein soleil** |
| **Zone IX** | +4 IL | **Neige à l'ombre** |
| **Zone VIII** | +3 IL | **Écorce de bouleau**, Tronc d'arbre clair |
| **Zone VII** | +2 IL | Peau très claire, **Pierre claire**, Mur blanc |
| **Zone VI** | +1 IL | Peau claire caucasienne, **Sable clair** |
| **Zone V** | **0 IL** | **🎯 Gris 18%** : Carte grise Kodak, **Béton**, **Herbe verte**, **Feuillage moyen**, **Bois patiné** |
| **Zone IV** | -1 IL | Peau foncée, **Feuillage à l'ombre** |
| **Zone III** | -2 IL | Pierre sombre, **Asphalte**, **Terre humide** |
| **Zone II** | -3 IL | **Écorce sombre**, Ombres profondes |
| **Zone I** | -4 IL | Noir profond, Ombres très denses |

> 💡 **Astuce Pro** : Sur le terrain sans carte grise ? Utilisez du **béton gris**, de l'**herbe verte** ou un **tronc d'arbre patiné** comme référence naturelle 0 IL pour vos mesures spot !

---

## 🚀 Installation

### Sur smartphone (Recommandé)

#### 📱 iPhone/iPad (iOS)

1. Ouvrir `index.html` avec **Safari** (obligatoire)
2. Appuyer sur le bouton **Partager** <img src="https://img.icons8.com/ios-filled/20/ffffff/share.png" alt="share" style="vertical-align: middle;"/> 
3. Sélectionner **"Sur l'écran d'accueil"**
4. ✅ L'icône apparaît sur votre écran d'accueil comme une vraie app !

#### 🤖 Android

1. Ouvrir `index.html` avec **Chrome**
2. Menu **⋮** (trois points) → **"Ajouter à l'écran d'accueil"**
3. ✅ L'application est installée !

### Sur ordinateur

1. Ouvrir `index.html` dans un navigateur moderne
2. Chrome proposera l'installation automatiquement
3. Ou utiliser directement dans le navigateur

> ⚡ **Bonus** : Une fois installée, l'application fonctionne **hors ligne** ! Parfait pour les shootings en extérieur sans réseau.

---

## 💡 Utilisation

### Switch IL/Fractions

Le switch **apparaît uniquement** dans les modes **Flash** et **Ratios** :

- **Mode IL** : Pour flashs Profoto supportant les dixièmes d'IL (ex: +1.3 IL)
- **Mode Fractions** : Pour autres marques (1/1, 1/2, 1/4, 1/8, etc.)
  - Un champ **"Puissance actuelle"** apparaît pour un calcul précis

### Navigation rapide

4 onglets en haut de l'écran :
- 📷 **Posemètre** : Lumière continue
- ⚡ **Flash** : Réglages flash (switch visible)
- 💡 **Ratios** : Key/Fill light (switch visible)
- 📊 **Estimation** : Sans posemètre avec grille réflectance

### Tous les paramètres modifiables

- **ISO** : Tapez n'importe quelle valeur → Arrondi automatique à l'ISO standard le plus proche
- **Ouvertures** : f/1.0 à f/45 (34 valeurs standard)
- **Vitesses** : 30" à 1/8000 (58 valeurs standard)
- **Compensations** : Boutons rapides par tiers d'IL

---

## 🧮 Formules photographiques

L'application utilise les formules professionnelles standard :

```javascript
// Conversion IL ↔ Ouverture
Nouvelle ouverture = Ouverture × 2^(IL/2)

// Différence IL entre ouvertures
ΔIL = 2 × log₂(Ouverture₂ / Ouverture₁)

// Puissance flash
Puissance = 2^(IL)

// Ratio d'éclairage
Ratio = 2^|IL| : 1
```

### Logique de compensation

| Mode | Qu'est-ce qu'on contrôle ? | Compensation +1 IL = |
|------|---------------------------|---------------------|
| **Flashmètre** | Puissance du FLASH | Augmenter puissance flash |
| **Posemètre** | Réglages APPAREIL | Ouvrir diaph (f/5.6 → f/4) |
| **Estimation** | Réglages APPAREIL | Ouvrir diaph / Ralentir vitesse |

---

## 🎓 Cas d'usage pratiques

### Scénario 1 : Portrait contre-jour
```
Mode : Posemètre
Mesure spot sur peau claire : f/5.6
Compensation : +2 IL (éviter silhouette)
✅ Résultat suggéré : f/4
```

### Scénario 2 : Paysage enneigé
```
Mode : Estimation
Mesure spot sur herbe verte : f/8
Zone sélectionnée : Herbe verte (0 IL)
Compensation : +1.3 IL (neige blanche éclatante)
✅ Résultat suggéré : f/5.6
```

### Scénario 3 : Studio avec ratio
```
Mode : Ratios Key/Fill
Key Light : f/8
Ratio souhaité : -2 IL
✅ Fill Light calculé : f/4 (ratio 4:1)
```

### Scénario 4 : Flash Profoto en mode IL
```
Mode : Flashmètre (IL activé)
Mesure actuelle : f/5.6
Ouverture souhaitée : f/8
Compensation : +1.3 IL
✅ Réglage flash : +2.4 IL
```

### Scénario 5 : Flash Godox en mode Fractions
```
Mode : Flashmètre (Fractions activé)
Puissance actuelle : 1/2
Mesure : f/5.6
Ouverture souhaitée : f/8
✅ Régler le flash : de 1/2 à 1/2.8
```

---

## 🔋 Spécifications techniques

| Caractéristique | Valeur |
|----------------|--------|
| **Taille totale** | 26 Ko |
| **Précision IL** | 0.1 (dixièmes) |
| **Ouvertures** | 34 valeurs (f/1.0 à f/45) |
| **Vitesses** | 58 valeurs (30" à 1/8000) |
| **ISO** | 37 valeurs standard (25-102400) |
| **Puissances flash** | 14 fractions (1/1 à 1/256) |
| **Offline** | ✅ Fonctionnel après installation |
| **Dépendances** | 0 (JavaScript vanilla pur) |

---

## 🎨 Design

### Interface

- **Thème sombre** par défaut (économie batterie + lisibilité plein soleil)
- **Boutons tactiles** : Minimum 44×44px (optimisé touch)
- **Hauteur fixe** : 720px (optimisé pour slides et présentations)
- **Responsive** : Mobile-first approach
- **Contraste élevé** : Lisible en extérieur

### Palette de couleurs

```css
--primary-color: #ff6b35;    /* Orange vif */
--secondary-color: #004e89;  /* Bleu profond */
--bg-dark: #1a1a1a;          /* Fond sombre */
--success-color: #4caf50;    /* Vert succès */
```

---

## 🌐 Compatibilité

| Navigateur | Support |
|------------|---------|
| Chrome/Edge (Desktop) | ✅ Support complet |
| Safari iOS | ✅ Support complet |
| Chrome Android | ✅ Support complet |
| Firefox | ✅ Support complet |
| Samsung Internet | ✅ Support complet |

---

## 📦 Structure du projet

```
lightmeter-app/
├── index.html              # Application principale
├── styles.css              # Design professionnel
├── app.js                  # Logique et calculs photographiques
├── manifest.json           # Configuration PWA
├── sw.js                   # Service Worker (fonctionnement offline)
├── README.md               # Cette documentation
├── LICENSE                 # Licence MIT
├── .gitignore              # Fichiers à exclure
├── CONTRIBUTING.md         # Guide de contribution
├── GUIDE.html              # Guide utilisateur illustré
└── setup-git.sh            # Script initialisation Git automatique
```

---

## 🔧 Développement local

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/lightmeter-app-pwa.git
cd lightmeter-app-pwa

# Ouvrir avec un serveur local (optionnel)
python3 -m http.server 8080

# Ou simplement ouvrir index.html dans un navigateur
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créer une branche** : `git checkout -b feature/ma-fonctionnalite`
3. **Développer** en suivant les conventions du projet
4. **Tester** sur smartphone (iOS et Android)
5. **Commit** avec messages clairs
6. **Push** : `git push origin feature/ma-fonctionnalite`
7. **Créer une Pull Request**

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

---

## 🐛 Problèmes connus et solutions

### L'application ne s'installe pas sur iOS
- ✅ Utiliser **Safari uniquement** (pas Chrome iOS)
- ✅ iOS 11.3+ requis pour PWA

### Les calculs semblent incorrects
- ✅ Vérifier que la mesure de base est correcte
- ✅ En mode Estimation, bien sélectionner la zone de réflectance appropriée

### L'application ne fonctionne pas hors ligne
- ✅ S'assurer que l'application a été chargée au moins une fois avec connexion
- ✅ Vider le cache et recharger si nécessaire

### Le switch IL/Fractions n'apparaît pas
- ✅ Normal ! Il est visible uniquement sur les onglets **Flash** et **Ratios**
- ✅ Masqué sur Posemètre et Estimation (pas nécessaire)

---

## 📝 Historique des versions

### v1.0 (Janvier 2026) - Version finale ✅

- ✅ 4 modes complets (Posemètre, Flashmètre, Ratios, Estimation)
- ✅ Switch IL/Fractions contextuel (Flash et Ratios uniquement)
- ✅ Champ puissance actuelle en mode Fractions
- ✅ Grille réflectance enrichie (exemples concrets quotidien)
- ✅ Compensation d'exposition partout
- ✅ ISO standard uniquement (37 valeurs)
- ✅ Affichage dixièmes IL (format professionnel)
- ✅ Logique exposition corrigée
- ✅ PWA installable offline
- ✅ 26 Ko optimisé

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👤 Auteur

**Développé pour Laurent**  
Neurologue et photographe professionnel

---

## 🙏 Remerciements

- **Ansel Adams** pour le Zone System
- **Kodak** pour les standards de réflectance
- **Profoto** pour l'inspiration du mode IL
- **Laurent** pour les tests rigoureux et feedbacks précieux

---

## 📧 Contact & Support

- 🐛 **Bugs** : [Créer une issue](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa/issues)
- 💡 **Suggestions** : [Discussions](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa/discussions)
- 📖 **Documentation** : [Wiki](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa/wiki)

---

<div align="center">

**⭐ Si ce projet vous est utile, n'hésitez pas à mettre une étoile ! ⭐**

[![Star on GitHub](https://img.shields.io/github/stars/VOTRE-USERNAME/lightmeter-app-pwa?style=social)](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa)

---

**Bon shooting ! 📸**

*Assistant Posemètre Pro - Précision photographique garantie*

</div>
