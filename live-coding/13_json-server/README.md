## Installation
Um json-server zu nutzen, müssen wir das Package zuerst installieren. Mittels `npm i -g json-server` können wir es global verfügbar machen.

## Daten vorbereiten
Der Server läuft mit einer JSON-Datei. Die Datei sollte ein Objekt enthalten, welches die Properties besitzt, die wir über den Server anbieten wollen:
```
{
    "users": [],
    "customers": [],
    "products: []
}
```

## Server starten
Der Server lässt sich mit dem Befehl `json-server <JSON-Datei>` starten. Soll der Server zusätzlich noch auf einem anderen Port laufen, kann dieser mit der Flag `-p<Port>` gesetzt werden.

## API nutzen
Alle Daten, die wir in der JSON-Datei angelegt haben, lassen sich über GET http://localhost:3000/<Property-Name> abrufen.
