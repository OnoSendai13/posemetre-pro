# 📸 Assistant Posemètre Pro

<div align="center">

![Version](https://img.shields.io/badge/version-1.1%20Capacitor-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Size](https://img.shields.io/badge/size-32KB-orange)
![PWA](https://img.shields.io/badge/PWA-ready-purple)
![iOS](https://img.shields.io/badge/iOS-ready-blue)
![Android](https://img.shields.io/badge/Android-ready-green)

**Application professionnelle de posemétrie et flashmétrie pour photographes**

[🚀 Démo en ligne](#installation) • [📖 Documentation](#documentation) • [🐛 Signaler un bug](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa/issues)

</div>

---

## ✨ Nouveautés v1.1

### 🎨 Double Thème Moderne

**Mode Clair - Pastel Mint** 🌿
- Design moderne et apaisant
- Couleurs : Bleu-gris clair + Vert menthe + Bleu vif
- Parfait pour usage en pleine lumière
- Tendance design 2024-2026

**Mode Sombre - Dark Orange** 🌙
- Look professionnel et technique (actuel)
- Couleurs : Noir profond + Gris + Orange vif
- Excellent en faible lumière
- Idéal pour studio et shooting de nuit

**Switch Automatique**
- ✅ Détection préférence système
- ✅ Toggle manuel via bouton 🌙/☀️
- ✅ Mémorisation du choix utilisateur
- ✅ Transition douce et fluide

### 📦 Support Capacitor (iOS + Android)

**App Native Ready**
- ✅ Configuration Capacitor complète
- ✅ Build iOS avec Xcode
- ✅ Build Android avec Android Studio
- ✅ Publication App Store + Play Store

---

## 🎯 Fonctionnalités

### 4 Modes professionnels

#### 📸 **Mode Posemètre** (Lumière continue)
- Mesure d'ouverture de base modifiable
- Configuration ISO et vitesse d'obturation
- Compensation d'exposition : **-2 à +3 IL par tiers**
- **3 suggestions automatiques** :
  - Option 1 : Modifier l'ouverture
  - Option 2 : Modifier la vitesse
  - Option 3 : Modifier l'ISO

#### ⚡ **Mode Flashmètre**
- Vitesse de synchronisation réglable (ex : 1/160)
- ISO de base configurable
- Mesure du flash actuelle vs ouverture visée
- **Switch IL / Fractions** :
  - **Mode IL** : Pour Profoto et autres flashs de studio (réglage en dixièmes d'IL)
  - **Mode Fractions** : Pour flashs cobra et portables (1/1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256)
- Champ "Puissance flash actuelle" pour calcul depuis position réelle
- Compensation supplémentaire : -2 à +3 IL

#### 💡 **Mode Ratios Key/Fill Light**
- Configuration de la Key Light
- Ratio souhaité : -3 IL à -0.5 IL
- Calcul automatique du Fill Light
- Affichage du ratio d'éclairage (ex : 4:1, 2:1)
- Affichage de la puissance en IL ou fractions

#### 📊 **Mode Estimation** (Sans posemètre)
- Mesure spot sur zones de référence
- **Grille de réflectance enrichie : 12 zones**
  - Zones sombres : Écorce sombre (-3 IL), Asphalte (-2 IL), Peau foncée (-1 IL)
  - Zone neutre : **Gris 18%** (0 IL) + 5 alternatives naturelles (béton, herbe verte, feuillage, bois patiné, écorce de hêtre)
  - Zones claires : Peau claire (+1 IL), Peau très claire (+2 IL), Blanc (+5 IL)
- Calcul de la lumière incidente depuis mesure spot
- Compensation d'exposition : -2 à +3 IL
- **3 suggestions automatiques**

---

## 🎨 Captures d'écran

### Interface principale
![Bannière](https://www.genspark.ai/api/files/s/OrCOWPQy)

*Application professionnelle de posemétrie et flashmétrie pour photographes*

### Les 4 modes
![4 Modes](https://www.genspark.ai/api/files/s/EauhhVQf)

| 📸 Posemètre | ⚡ Flashmètre | 💡 Ratios | 📊 Estimation |
|:---:|:---:|:---:|:---:|
| Lumière continue | IL / Fractions | Key/Fill Light | Sans posemètre |

---

## ⚡ Installation

### Option 1 : Sur smartphone (recommandé)

#### iOS (Safari)
1. Télécharger l'archive `lightmeter-app-PROD.zip`
2. Dézipper sur votre iPhone
3. Ouvrir `index.html` dans Safari
4. Appuyer sur **Partager** → **Sur l'écran d'accueil**
5. L'application fonctionne maintenant hors ligne ! 📱

#### Android (Chrome)
1. Télécharger l'archive `lightmeter-app-PROD.zip`
2. Dézipper sur votre téléphone
3. Ouvrir `index.html` dans Chrome
4. Menu **⋮** → **Ajouter à l'écran d'accueil**
5. L'application fonctionne maintenant hors ligne ! 📱

### Option 2 : GitHub Pages (hébergement gratuit)

1. **Fork ce repository**
2. **Settings** → **Pages**
3. **Source** : Deploy from branch `main` / Dossier `/`
4. **Save**
5. Votre app sera disponible sur : `https://votre-username.github.io/lightmeter-app-pwa/`

### Option 3 : Serveur local

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/lightmeter-app-pwa.git
cd lightmeter-app-pwa

# Lancer un serveur local (Python)
python3 -m http.server 8000

# Ou avec Node.js
npx http-server -p 8000

# Ouvrir http://localhost:8000 dans votre navigateur
```

---

## 📐 Valeurs photographiques

### Ouvertures standard (34 valeurs)
f/1.0, f/1.1, f/1.2, f/1.4, f/1.6, f/1.8, f/2, f/2.2, f/2.5, f/2.8, f/3.2, f/3.5, f/4, f/4.5, f/5, f/5.6, f/6.3, f/7.1, f/8, f/9, f/10, f/11, f/13, f/14, f/16, f/18, f/20, f/22, f/25, f/29, f/32, f/36, f/40, f/45

**Progression** : ×√2 (facteur 1.414)

### Vitesses d'obturation (58 valeurs)
30", 25", 20", 15", 13", 10", 8", 6", 5", 4", 3", 2.5", 2", 1.6", 1.3", 1", puis fractions : 1/1.3, 1/1.6, 1/2, 1/2.5, 1/3, 1/4, 1/5, 1/6, 1/8, 1/10, 1/13, 1/15, 1/20, 1/25, 1/30, 1/40, 1/50, 1/60, 1/80, 1/100, 1/125, 1/160, 1/200, 1/250, 1/320, 1/400, 1/500, 1/640, 1/800, 1/1000, 1/1250, 1/1600, 1/2000, 1/2500, 1/3200, 1/4000, 1/5000, 1/6400, 1/8000

**Progression** : ×2 (doublement)

### ISO standard (37 valeurs)
50, 64, 80, 100, 125, 160, 200, 250, 320, 400, 500, 640, 800, 1000, 1250, 1600, 2000, 2500, 3200, 4000, 5000, 6400, 8000, 10000, 12800, 16000, 20000, 25600, 32000, 40000, 51200, 64000, 80000, 102400

**Progression** : ⅓ IL (facteur 1.26)

### Fractions de puissance flash (9 valeurs)
1/1 (pleine puissance), 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256

**Progression** : ÷2 (divisions binaires)

### Compensation d'exposition
**-2 IL, -1 IL, -⅓ IL, 0, +⅓ IL, +1 IL, +1⅓ IL, +2 IL, +3 IL**

**Précision** : Par tiers d'IL (0.33)  
**Affichage** : Dixièmes d'IL (+1.3 IL)

---

## 🔬 Formules photographiques

### Calcul d'ouverture
```
Nouvelle ouverture = Ouverture de base × 2^(ΔIL/2)

Exemple : f/5.6 + 1.33 IL
= f/5.6 × 2^(1.33/2)
= f/5.6 × 1.68
≈ f/9.5 (arrondi à f/9 ou f/11)
```

### Différence en IL
```
ΔIL = 2 × log₂(Ouverture₂ / Ouverture₁)

Exemple : f/5.6 → f/8
= 2 × log₂(8 / 5.6)
≈ 1 IL
```

### Puissance flash
```
Puissance = 2^(ΔIL)

Exemple : +2 IL
= 2^2 = 4× la puissance
```

### Ratio d'éclairage
```
Ratio = 2^|ΔIL| : 1

Exemple : -2 IL entre Key et Fill
= 2^2 : 1 = 4:1
```

---

## 🧪 Grille de réflectance (Zone System)

| Zone | IL | Exemples concrets |
|------|-----|-------------------|
| **Zone IX** | +5 IL | Blanc pur, Neige plein soleil |
| **Zone VIII** | +4 IL | Blanc neige à l'ombre |
| **Zone VII** | +3 IL | Écorce de bouleau, Tronc d'arbre clair |
| **Zone VI** | +2 IL | Peau très claire, Pierre claire, Mur blanc |
| **Zone V½** | +1 IL | Peau claire caucasienne, Sable clair |
| **Zone V** | **0 IL** | **Gris neutre 18%** (carte grise Kodak) |
| | | **Alternatives naturelles** : Béton gris, Herbe verte, Feuillage moyen, Bois patiné, Écorce de hêtre |
| **Zone IV** | -1 IL | Peau foncée, Feuillage à l'ombre |
| **Zone III** | -2 IL | Pierre sombre, Asphalte, Terre humide |
| **Zone II** | -3 IL | Écorce sombre, Ombres profondes |
| **Zone I** | -4 IL | Noir profond, Ombres très denses |

**Référence** : Système de zones d'Ansel Adams

---

## 🎓 Mode d'emploi

### Mode Posemètre (Lumière continue)

1. Sélectionner l'ouverture mesurée (ex : f/5.6)
2. Configurer ISO et vitesse
3. Choisir la compensation d'exposition (ex : +1⅓ IL)
4. **L'app propose 3 options** :
   - Modifier l'ouverture → f/4
   - Modifier la vitesse → 1/60
   - Modifier l'ISO → ISO 250

### Mode Flashmètre

#### En mode IL (Profoto, Broncolor, etc.)
1. Basculer le switch sur **IL**
2. Entrer la mesure du flash actuelle (ex : f/5.6)
3. Entrer l'ouverture souhaitée (ex : f/8)
4. Ajouter une compensation (ex : +1⅓ IL)
5. **L'app indique** : "Régler le flash pour obtenir f/13 (+2.4 IL)"

#### En mode Fractions (Godox, Canon, Nikon, etc.)
1. Basculer le switch sur **Fractions**
2. Sélectionner la **puissance actuelle** du flash (ex : 1/32)
3. Entrer la mesure (ex : f/5.6)
4. Entrer l'ouverture visée (ex : f/8)
5. Ajouter une compensation (ex : +1⅓ IL)
6. **L'app indique** : "Régler de 1/32 à 1/8"

### Mode Ratios Key/Fill

1. Configurer la Key Light (ex : f/8)
2. Choisir le ratio souhaité (ex : -2 IL)
3. **L'app calcule** :
   - Fill Light : f/4
   - Ratio d'éclairage : 4:1
   - Puissance Fill vs Key : 1/4 (en fractions) ou -2 IL

### Mode Estimation (Sans posemètre)

1. Faire une **mesure spot** sur une zone de référence (ex : asphalte, lecture f/8)
2. Sélectionner la zone dans la liste (ex : "Pierre sombre / Asphalte (-2 IL)")
3. **L'app calcule la lumière incidente** : f/4
4. Ajouter une compensation d'exposition (ex : +1⅓ IL)
5. **L'app propose 3 options finales** :
   - Régler à f/2.8
   - Ou ralentir la vitesse
   - Ou augmenter l'ISO

**Astuce** : Utilisez ce mode quand vous n'avez pas de posemètre incident, mais que vous pouvez mesurer une zone de réflectance connue (herbe, béton, peau, etc.)

---

## 🔧 Compatibilité

### Matériel photographique

#### Boîtiers compatibles
✅ Canon (EOS R, 5D, 6D, 90D...)  
✅ Nikon (Z, D850, D780...)  
✅ Sony (A7, A9, A1...)  
✅ Fujifilm (X-T, GFX...)  
✅ Olympus / OM System  
✅ Panasonic (S, GH...)  
✅ Leica  

#### Flashs compatibles

**Mode IL** :
- Profoto (A1, A2, B10, D2...)
- Broncolor
- Elinchrom
- Hensel

**Mode Fractions** :
- Godox (V1, AD200, AD600...)
- Canon Speedlite (600EX, 430EX...)
- Nikon SB (SB-5000, SB-700...)
- Sony HVL
- Flashs de studio (Godox, Jinbei...)

#### Posemètres de référence
- Sekonic (L-308, L-478, L-858)
- Gossen
- Minolta

### Navigateurs

| Navigateur | Version minimale | Statut |
|------------|------------------|--------|
| **Chrome** (Desktop/Mobile) | 80+ | ✅ Testé |
| **Safari** (iOS/macOS) | 13+ | ✅ Testé |
| **Firefox** | 75+ | ✅ Compatible |
| **Edge** | 80+ | ✅ Compatible |
| **Samsung Internet** | 12+ | ✅ Compatible |

---

## 🚀 Technologies

- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **PWA** : Service Worker, Manifest.json
- **Design** : Mobile-first, responsive
- **Taille** : 28 Ko (ultra léger)
- **Dépendances** : 0 (aucune librairie externe)
- **Performance** : Calculs instantanés en JavaScript natif

---

## 📖 Documentation

### Fichiers inclus
- `README.md` : Ce fichier
- `GUIDE.html` : Guide d'installation et d'utilisation détaillé
- `CONTRIBUTING.md` : Guide de contribution
- `CHANGELOG.md` : Historique complet des versions

---

## 🐛 Bugs connus / Limitations

### Aucun bug connu ✅

Tous les bugs critiques identifiés pendant le développement ont été corrigés :
- ✅ Logique d'exposition correcte dans tous les modes
- ✅ Arrondi des vitesses précis
- ✅ Affichage correct de toutes les vitesses (tolérance relative)
- ✅ Mode Fractions fonctionnel
- ✅ Fractions de puissance conformes (divisions binaires uniquement)
- ✅ Mode Estimation : calcul lumière incidente et compensation corrects
- ✅ 7 bugs critiques corrigés au total (voir [CHANGELOG.md](CHANGELOG.md))

### Limitations actuelles
- Pas de sauvegarde d'historique (à venir)
- Pas de presets personnalisés (à venir)
- Mode High Speed Sync non supporté

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour plus d'informations.

### Comment contribuer
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📜 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
Copyright (c) 2026 Laurent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍⚕️👨‍🎨 À propos

**Développé par/pour** : Laurent — Neurologue et photographe professionnel

**Motivation** : Créer un outil de posemétrie professionnel, gratuit et accessible à tous les photographes, avec une attention particulière à la précision et à la conformité aux standards de l'industrie.

---

## 🙏 Remerciements

- **Ansel Adams** - Pour le système de zones qui inspire le mode Estimation
- **Sekonic, Gossen, Minolta** - Pour les références en posemétrie
- **La communauté photographique** - Pour les retours et tests

---

## 📞 Support

### Besoin d'aide ?
- 📖 Consultez [GUIDE.html](GUIDE.html)
- 🐛 [Signaler un bug](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa/issues)
- 💬 [Poser une question](https://github.com/VOTRE-USERNAME/lightmeter-app-pwa/discussions)

---

## 🗺️ Roadmap (Fonctionnalités futures)

- [ ] Historique des mesures
- [ ] Presets personnalisés
- [ ] Export des données (CSV, PDF)
- [ ] Mode High Speed Sync
- [ ] Calculateur de profondeur de champ
- [ ] Calculateur d'hyperfocale
- [ ] Support multi-langues (EN, ES, DE, IT)
- [ ] Version native iOS/Android

---

## ⭐ Remerciements spéciaux

Si cette application vous est utile, n'hésitez pas à :
- ⭐ Mettre une étoile au projet
- 🐛 Signaler les bugs
- 💡 Proposer des améliorations
- 📸 Partager vos photos !

---

<div align="center">

**Bon shooting !** 📸✨

Made with ❤️ for photographers

[⬆ Retour en haut](#-assistant-posemètre-pro)

</div>