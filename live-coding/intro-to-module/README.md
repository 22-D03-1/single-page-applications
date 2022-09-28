# Intro to Modules

Wir machen heute unseren Code modular, heisst wir teilen ihn in Komponenten auf mit verschiedenen Funktionen.
Jede Komponente bekommt eine eigene Datei

![Modular App](https://static-assets.codecademy.com/Courses/Learn-JavaScript/Modules/modular-program-diagram.svg)

## Vorteile
* Bugfixing ist leichter
* strukturierteres Projekt
* Code kann wiederverwendet werden -> weniger Aufwand
* Information vor anderen Modulen geheim halten
* Namespace der Variablen wird nicht belegt

## Implementierung
### Exportieren
**Variante 1:** Am Ende der Datei als Objekt `export {varOne, varTwo, ...}`
**Variante 2:** Als keyword vor Deklarierung der Variable `export const varOne = ... `

### Importieren
`import {varOne, varTwo} from "./path/to/file.js"`
Umbenenen beim importieren `import { varOne as firstImport } from "./path/to/file.js"`
Alle exports als Modul importieren `import * as moduleName from "./path/to/file.js"`

### Special Case: Default
Wenn eine Datei eine "HauptVariable" hat, kann diese ohne Benennung als default exportiert werden. Beim import sind dann keine {} mehr notwendig und der Name kann beim importieren vergeben werden
**Export:** `export default () => {...}`
**Import:** `import nameWeChose from "./fileWithDefaulExport.js"`