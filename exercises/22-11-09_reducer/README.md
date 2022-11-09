# Reducer
Bei der heutigen Übung wollen wir uns die Möglichkeiten von useReducer genauer anschauen. Ihr baut eine Rezept App, bei der verschiedene Schritte abgehakt werden können. Hier ein Beispielrezept

```
[{
  name: "Bohnen-Cassoulet mit Fenchel, Speck und Salsiccia",
  id: 1,
  picture: "https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FlwuqhrpjTMkxKTFubmRNk11E7Gs%3D%2F768x576%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2111-photo-final-01.jpg&w=1440&q=85",
  steps: [
    "Bohnen in einem Sieb abwaschen und gut abtropfen lassen. Entferne den Strunk des Fenchels. Putze und Wasche das Suppengrün und schneide es zusammen mit dem Fenchel in große Stücke. Schäle und hacke die Zwiebel und den Knoblauch.",
    "Speck und Salsiccia in einem großen Bräter anbraten. Salsiccia aus dem Bräter nehmen und beiseite stellen. Zwiebeln und Knoblauch in die Pfanne geben und kurz anschwitzen. Dann Fenchel und Suppengrün hinzugeben und für ca. 2-3 Min. anbraten. Mit Weißwein ablöschen. Tomaten, Lorbeerblätter, Bohnen und Hühnerbrühe hinzufügen. Für ca. 60 Min. köcheln lassen. Mit Salz und Pfeffer abschmecken.",
    "Ofen auf 170°C vorheizen. Thymian und Petersilie hacken und mit den Semmelbröseln vermischen. Salsiccia zurück in den Bräter geben. Semmelbrösel-Mischung auf dem Cassoulet verteilen und mit Butterschmalz beträufeln. Im vorgeheizten Ofen für ca. 60 Min. backen, oder bis sich eine goldbraune Kruste gebildet hat. Guten Appetit!"
  ]
}]
```

### Aufgaben
* Erstellt eine React App
* Installiert alle Pakete
* Erstellt einen Component für euer Rezept und zeigt die Informationen an
* Jeder Kochschritt sollte abhakbar sein
* Wenn ein Kochschritt abgehakt wurde, soll dieser ausgeblendet,durchgeschtrichen oder ausgegraut werden.
* Es gibt einen Button, der das Abhaken wieder rückgängig machen kann
* BONUS: Füge noch weitere Rezepte hinzu (Als Inspiration könnt ihr www.kitchenstories.com nutzen) und erstellt ein Rezept für jede Id, die über eine Route aufgerufen werden kann `/recipe/1`

Nutzt zum State Management useReducer. 