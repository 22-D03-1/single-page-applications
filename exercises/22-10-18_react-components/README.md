Unser Hotel ist etwas in die Jahre gekommen. So wird die Zimmerbelegung bisher noch auf Papier festgehalten, was in der heutigen Zeit nicht mehr sein muss. Wir wollen das nun ändern und entwickeln deshalb eine digitale Zimmerverwaltung!

1. Zuerst wollen wir uns anschauen, welche Daten für ein Zimmer nötig sind. Wir beginnen damit, die aktuelle Belegung darzustellen.
Ein Datensatz für ein Zimmer enthält die Raumnummer (roomNo), Details zum Gast (guest) und Anreise- und Abreise-Datum (checkIn & checkout):

{
    "roomNo": 208,
    "guest": {
        "firstName": "Melicent",
        "lastName": "Dragge"
    },
    "checkIn": "2022-04-10",
    "checkOut": "2022-04-11"
}

Diese Daten wollen wir in einer eigenständigen Komponente ausgeben. Als Name bietet sich "Room" an.
Wenn du die Komponente erstellst, nutze zuerst den Beispieldatensatz als Variable innerhalb der Komponente, wie in den ersten drei JSX-Aufgaben von gestern.

1. Da wir mehrere Zimmer haben, sollten wir diese natürlich alle anzeigen. Erstelle hierfür eine neue Komponente für die Übersicht und rendere dort drei Room-Komponenten. Dass die Daten zunächst gleich sind, ist für diesen Schritt egal.

2. Nun steuere die Daten für die drei Zimmer über Props. Übergebe hier ein ganzes Objekt für das Zimmer. So kannst du dieses später besser erweitern.

3. Da wir mehr als drei Zimmer haben, macht es Sinn, auf eine dynamische Generierung umzusteigen. Nutze hierfür map() und die vollständige Liste mit allen Datensätzen.

4. Die Zimmernummern sind noch nicht geordnet. Kannst du sie nach Zimmernummer aufsteigend sortieren und dann ausgeben? Beachte dabei, dass die ursprüngliche Liste nicht umgeschrieben werden soll. Die Sortierung muss innerhalb deines Codes passieren.

5. Die Datumsangaben checkIn und checkOut lassen sich bestimmt noch etwas schöner formatieren. Kannst du sie in das Format DD.MM.YY bringen?
