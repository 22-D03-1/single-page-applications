# Build Tools

## package.json
* Kann initialisiert werden mit `npm init` oder `npm init -y` wenn man nicht jeden Prompt einzeln durchgehen möchte
* Side Fact: Wenn wir unsere App initial starten hat sie eigentlich Version v0.1.0 und nicht v1.0.0 :-)

## npm
* um ein Paket in unsere App zu installieren benutzen wir den Befehel `npm install <paketName>` bzw `npm install --save <paketName>` um explizit das Paket als Dependency (Abhängigkeit) in unsere package.json hinzuzufügen.
* Um alle dependencies in der package.json zu installieren `npm install` ausführen

## Webpack
"Webpack ist ein Opensource-JavaScript-Modul-Packer. Die wesentliche Aufgabe besteht darin, JavaScript-Dateien für die Nutzung im Browser zusammenzuführen und zu einer Datei zu bündeln." Quelle: Wikipedia
* Um die Dateien zu bündeln können wir ein neues Skript in unserer package.json erstellen unter `"scripts": "build": "webpack"`. 
* Wenn wir es dann ausführen mit `npm run build` wird ein Ordner dist angelegt mit einer main.js. Das ist jetzt das script auf das wir in unserer HTMl Datei verweisen müssen `<script type="module" src="../dist/main.js></script>"`
* Um während der Entwicklung nicht nach jeder Änderung ein neues build zu erstellen, können wir ein watch Skript erstellen und laufen lassen. `"watch": "webpack --watch"` wird in der package.json hinterlegt und mit `npm run watch` ausgeführt
* Optional: Um den Hinweis mit dem fehlendem mode beim build zu lösen benötigen wir eine webpack configuration datei (webpack.config.js) mit folgendem Inhalt: 
```
module.exports = {
    mode: "development",
}
```
