# 📷 Light Meter Pro Assistant

<div align="center">

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![PWA](https://img.shields.io/badge/PWA-ready-green.svg)
![Capacitor](https://img.shields.io/badge/Capacitor-iOS%20%7C%20Android-purple.svg)
![Size](https://img.shields.io/badge/size-~40KB-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![i18n](https://img.shields.io/badge/languages-FR%20%7C%20EN-orange.svg)

**Professional incident light metering assistant for photographers**

[Features](#-features) • [Installation](#-installation) • [Modes](#-modes) • [Documentation](#-documentation)

</div>

---

## 🌟 What's New in v2.0

### ☀️ Sunny 16 — Fifth Mode

v2.0 introduces a fully integrated **Sunny 16 mode**, enabling exposure estimation with no light meter at all — based on natural lighting conditions.

#### Part 1 — Weather/Light condition selector
8 buttons covering the full natural light spectrum (EV 7 → 16):

| Condition | EV | f/ @ 100 ISO · 1/100s |
|---|---|---|
| ❄️ Snow / Beach / Water | 16 | f/22 |
| ☀️ Full sun | 15 | f/16 |
| 🌤 Light haze | 14 | f/11 |
| ⛅ Overcast | 13 | f/8 |
| 🌥 Heavy overcast | 12 | f/5.6 |
| 🌫 Shade / Sunset | 11 | f/4 |
| 🌆 Dusk | 9 | f/2.8 |
| 🏠 Indoor (daylight) | 7 | f/2 |

Selecting a condition immediately displays the reference exposure in a highlighted box.

#### Part 2 — Triangular calculator
- **3 linked selects**: Aperture · Shutter · ISO
- **Reciprocal logic**: change any one parameter and the other two auto-adjust to preserve the EV
- **Lock buttons**: choose which parameter stays fixed (🔒 Aperture / Shutter / ISO)
- **Current EV always visible**

#### Also fixed in this cycle
- **No Meter tab** (Zone system): zone-to-aperture calculation was inverted — corrected so brighter zones correctly close the diaphragm

---

## 🌟 What's New in v1.6

### 🎨 Theme, i18n, Onboarding & Android Edge-to-Edge
- **Explicit Theme Selector**: 🌓 Auto / ☀️ Light / 🌙 Dark with tooltips in FR/EN
- **Live Language Updates**: All UI refreshes instantly on language change
- **Google Play Rating Button**: Gold button in footer linking to Play Store rating
- **First-Use Onboarding Tour**: 5-step interactive guided tour with swipe navigation
- **EV Equivalence Table**: IL 10→1 with fractions + tenths in Help modal
- **Android Edge-to-Edge**: Full screen rendering for SDK 35 with safe area insets

---

## ✨ Features

### 🎯 Core Philosophy
This app works with **incident light measurement** (light falling ON the subject), which is more reliable than reflected light (what the camera meter sees) because it's independent of subject color/reflectance.

### 📱 Progressive Web App
- **Installable** on any device (iOS, Android, Desktop)
- **Offline-ready** with Service Worker caching
- **Native-like** experience with Capacitor support

### 🛠️ Professional Tools
- **5 specialized modes** for different shooting scenarios
- **Exposure compensation** in 1/3 EV increments
- **Industry-standard values** (apertures, shutter speeds, ISO)
- **Real-time calculations** with multiple suggestions

---

## 🎛️ Modes

### 📷 Light Meter Mode (Continuous Light)
Measure incident light and get exposure suggestions.

**Workflow:**
1. Take incident light reading with your meter
2. Enter the f-stop indicated
3. Set your ISO and base shutter speed
4. Apply creative exposure compensation if needed
5. Get 3 equivalent exposure options (aperture, shutter, ISO variations)

**Compensation Range:** -2 EV to +3 EV (1/3 increments)

---

### ⚡ Flash Meter Mode
Professional flash metering with IL and Fractions modes.

**Features:**
- **IL Mode**: Direct EV adjustments (+/-2.4 EV, etc.)
- **Fractions Mode**: Real flash power values (1/1, 1/2, 1/4... 1/256)
- **HSS Support**: Calculate power loss for high-speed sync
- **Sync Speed**: Configurable from 1/60 to 1/320

**HSS Mode:**
- Enable HSS toggle when shooting above sync speed
- Select your camera's max sync speed
- App automatically calculates power loss
- Get recommendations for normal sync alternatives

---

### 💡 Ratios Mode (Key/Fill)
Calculate fill light based on key light measurement.

**Common Ratios:**
| Ratio | EV Difference | Look |
|-------|---------------|------|
| 1:1 | 0 EV | Flat, even lighting |
| 2:1 | -1 EV | Subtle modeling |
| 4:1 | -2 EV | Dramatic, portrait |
| 8:1 | -3 EV | Very dramatic |

**Workflow:**
1. Measure key light f-stop
2. Select desired ratio
3. Get fill light f-stop automatically

---

### 🎯 No Meter Mode (Zone System)
Calculate incident light from spot meter readings, using the Zone System.

**How it works:**
Cameras assume everything is 18% gray. By measuring a known-reflectance zone and telling the app what zone you are pointing at, it corrects the exposure so the subject is rendered at its true tonal value.

**Corrected logic (v2.0):**
- You set a base exposure for 18% gray (Zone V)
- You identify the actual zone of your subject (e.g. white sand = Zone VII = +2 EV)
- The app *closes* the diaphragm by 2 stops (f/8 → f/16) to preserve texture
- Additional creative compensation can then be added on top

**Zone System (12 zones):**
| Zone | EV | Examples |
|------|-----|----------|
| +4 | Blown white | Specular highlights — no detail |
| +3 | Bright white | Snow in sun, white clouds |
| +2 | Light gray | Very fair skin, white wall |
| +1.5 | — | Bright overcast sky |
| +1 | — | Fair skin, light sand |
| +0.5 | — | Medium light skin |
| 0 | 18% Gray | Green grass, deep blue sky |
| -0.5 | — | Medium dark skin |
| -1 | — | Dark skin, stormy sky |
| -2 | — | Asphalt, dark stone |
| -3 | — | Deep shadows |
| -4 | Blocked black | No detail |

---

### ☀️ Sunny 16 Mode *(New in v2.0)*
Estimate exposure from natural lighting conditions without any meter.

**How it works:**
Based on the historical Sunny 16 rule — in direct sun, set f/16 at 1/ISO shutter speed. The app extends this to 8 conditions covering EV 7 to 16.

**Workflow:**
1. Select the lighting condition that matches your scene
2. Read the reference exposure (f/ @ 100 ISO · 1/100s)
3. In the triangular calculator, lock the parameter you want to keep fixed
4. Adjust any select — the other two update automatically

---

## 📥 Installation

### PWA (Recommended)
**iOS Safari:**
1. Open the app URL
2. Tap Share button
3. Select "Add to Home Screen"

**Android Chrome:**
1. Open the app URL
2. Tap the install banner or menu
3. Select "Install app"

### Native App (Capacitor)
```bash
# Install dependencies
npm install

# Add platforms
npx cap add ios
npx cap add android

# Open in IDE
npx cap open ios      # Xcode
npx cap open android  # Android Studio
```

### Local Development
```bash
# Simple HTTP server
npm run dev
# Opens at http://localhost:8000
```

---

## 📚 Documentation

### 📖 Help Modal
Click the **?** button in the header for integrated help with:
- Incident vs reflected light explanation
- Exposure triangle principles
- Mode-specific workflows
- HSS guidance
- Zone system reference

### 🔄 Language Toggle
Click **FR/EN** in the header to switch languages instantly.

### 🌙 Theme Toggle
Click the **☀️/🌙** icon to switch between Auto / Light / Dark themes.

---

## 🔧 Technical Specifications

### Photographic Values
- **Apertures**: 34 values (f/1.0 to f/45)
- **Shutter Speeds**: 58 values (30s to 1/8000)
- **ISO**: 37 standard values (50 to 102400)
- **Flash Powers**: 9 binary fractions (1/1 to 1/256)
- **Compensation**: 1/3 EV increments
- **Sunny 16 conditions**: 8 (EV 7 to 16)

### Technology Stack
- **Frontend**: HTML5, CSS3, ES6+ JavaScript
- **PWA**: Service Worker, Web App Manifest
- **Mobile**: Capacitor 5.x for iOS/Android
- **i18n**: Custom translation system (FR + EN)
- **Size**: ~40KB total (zero dependencies)

### Browser Support
| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Safari | ✅ Full |
| Firefox | ✅ Full |
| Edge | ✅ Full |
| Samsung Internet | ✅ Full |

---

## 📂 Project Structure

```
posemetre-pro/
├── index.html          # Main application
├── app.js              # Application logic (bundled)
├── i18n.js             # Translation system
├── theme-switcher.js   # Theme management
├── styles.css          # Complete styles (dark + light)
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker
├── src/                # Modular source files
│   ├── main.js         # Entry point + events
│   ├── ui.js           # DOM interface logic
│   ├── state.js        # State management
│   ├── calculations.js # Photographic math
│   └── constants.js    # Reference values
├── www/                # Android build output
├── CHANGELOG.md        # Version history
├── README.md           # This file
└── LICENSE             # MIT License
```

---

## 📋 Changelog Highlights

### v2.0 (Current — September 28, 2026)
- ✅ **Sunny 16 mode** — 5th complete mode, no meter needed
- ✅ 8 lighting conditions (EV 7–16) with reference f/ display
- ✅ Triangular calculator (aperture/shutter/ISO, lock any one)
- ✅ Fix: Zone System (No Meter) calculation was sign-inverted

### v1.6 (May 29, 2026)
- ✅ Explicit Theme Selector (Auto/Light/Dark) with translated tooltips
- ✅ Live language updates on all dynamic content
- ✅ First-use onboarding guided tour (5 steps, swipe navigation)
- ✅ EV equivalence table (IL ↔ fractions) in Help modal
- ✅ Google Play rating button in footer
- ✅ Android Edge-to-Edge for SDK 35 with safe area insets

### v1.5
- ✅ Published on Google Play Store (Version 3)
- ✅ Target SDK 35, app signing and bundle config

### v1.4
- ✅ 1/10th stop precision for Current Flash Power in Fractions mode
- ✅ Capped target flash power at 1/1 (Full Power) / 10.0 EV
- ✅ Visual warnings when required power exceeds max flash power

### v1.3
- ✅ f-stop + tenths selectors for flash meter readings
- ✅ Applied to Light Meter, Flash, and Ratios modes

### v1.2
- ✅ Multilingual support (FR/EN)
- ✅ HSS mode with power loss calculation
- ✅ Integrated help modal

### v1.1
- ✅ Dual theme system (Light/Dark)
- ✅ Capacitor integration for native apps
- ✅ Auto theme detection

### v1.0
- ✅ 4 professional modes
- ✅ PWA with offline support
- ✅ 7 critical bugs fixed

See [CHANGELOG.md](CHANGELOG.md) for complete history.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

MIT License - Copyright (c) 2026 Laurent Suchet IG:@ono_sendai

See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- **Laurent Suchet IG:@ono_sendai** — Neurologist and professional photographer
- Designed for real-world field use
- Based on professional photographic standards
- Tested with Profoto and other major flash brands

---

<div align="center">

**Happy shooting!** 📸✨

Made with ❤️ for photographers by Laurent Suchet IG:@ono_sendai

v2.0 — September 28, 2026

[⬆ Back to top](#-light-meter-pro-assistant)

</div>
