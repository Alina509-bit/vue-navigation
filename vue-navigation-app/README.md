# vue-navigation-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### TypeScript-Check

```sh
npm run typecheck
```

Die neuen Views, Datenmodelle und Hilfsfunktionen verwenden TypeScript. Die bestehende
JavaScript-Konfiguration bleibt erhalten. Ein Lint-Befehl ist bisher nicht eingerichtet.

### Trainings-App: technischer Grundstand

- `/` leitet auf `/trainings` weiter.
- `/trainings` und `/exercises` enthalten zunächst nur Übersichtstitel.
- `/trainings/:id` und `/exercises/:id` zeigen die jeweiligen Basisdaten.
- Unbekannte URLs zeigen die 404-Seite; unbekannte IDs einen Hinweis in der Detailansicht.
- `src/data/` enthält 20 synthetische Übungen und 12 Trainings. Die Daten benötigen keinen Store.
- `src/utils/data.ts` exportiert `getExerciseById`, `getTrainingById` und `getExerciseAlternatives`.
- `src/assets/` ist für spätere Assets vorbereitet und aktuell leer (leere Ordner werden von Git nicht erfasst).

Gewichte werden in kg gespeichert (Kurzhanteln pro Hantel), die Trainingsdauer in Minuten.
`weight: 0` bedeutet ohne Zusatzgewicht. Plank ist im Übungskatalog enthalten, wird aber
nicht in Trainings verwendet, da das aktuelle Satzmodell Wiederholungen statt Haltezeiten abbildet.
Alternativen adressieren ähnliche Muskelgruppen und sind nicht immer identische Bewegungen.
Für Wadenheben enthält der Katalog noch keine passende Alternative; die Liste ist deshalb leer.

Der Router verwendet HTML5-History. Beim späteren Deployment muss der Webserver unbekannte
Anwendungs-Pfade auf `index.html` zurückführen, damit direkte URLs und Reloads funktionieren.
Vite unterstützt diesen Fallback lokal bereits.
