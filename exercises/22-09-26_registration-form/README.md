Erstelle ein Registrierungsformular, das folgende Daten abfragt:
- Vorname
- Nachname
- E-Mail-Adresse
- Passwort
- Passwort wiederholen
- Geburtstag
- Geschlecht
- Kleine Vorstellung
- Zustimmung AGB (Allgemeine Geschäftsbedingungen)
- Zustimmung Datenschutz

1. Erstelle das HTML-Formular mit den passenden Eingabeformaten (Inputs, Checkboxen, Radios,...)
2. Fange die Daten mit Javascript ab und hindere den Browser daran, das Formular abzusenden
3. Stelle sicher, dass die folgenden Regeln eingehalten werden. Wird gegen mindestens eine Regel verstoßen, zeige einen
allgemeinen Fehler an ("Das Formular ist fehlerhaft!")
- Vorname, E-Mail-Adresse, Passwort, Passwort wiederholen, Geburtstag, Zustimmung AGB und Zustimmung Datenschutz sind
Pflichtfelder
- Passwort und Passwort wiederholen müssen identisch sein
- Die Person muss älter als 18 Jahre alt sein
4. Zeige eine aussagekräftige Fehlermeldung an der Stelle an, wo der Fehler aufgetreten ist. Sind bspw. die Passwörter
nicht identisch, zeige an diesen Feldern die Meldung "Die Passwörter müssen übereinstimmen" an
5. Füge einen Button hinzu, mit dem der Wert des Passwort-Felds ein- und ausgeblendet werden kann
6. Füge eine Möglichkeit hinzu, das Formular zurückzusetzen. Frage mittels der Methode window.confirm() ab, ob das
Formular wirklich zurückgesetzt werden soll
