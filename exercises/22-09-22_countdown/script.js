const namePrompt = document.querySelector("#prompt")
const textField = document.querySelector("#input-name")

//Funktion für unseren EventListener
const nameHandler = () => {
  /**
   * der value parameter eines Textfeld beinhaltet den eingegebenen Text
   * Wir Fragen ab, dass die Funktion nur ausgef+hrt werden soll, wenn value nicht leer ist
   */
  if (textField.value) {
    //Array mit den Namen unserer Wochentage
    const weekday = [
      "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
    ];
    /**
     * new Date erstellt uns ein Date Objekt mit dem aktuellen Datum (und Zeit)
     * getDay() ist eine Funktion des Date Objekt welches eine Zahl zwischen 0-6 zurück gibt
     * 0: Sonntag, 1: Montag, 2: Dienstag ...
     */
    const d = new Date().getDay() - 2;
    /**
     * Greeting ist ein leeres Element in der HTML Datei. Wir ändern über innerText
     * den Inhalt in das was wir in value erhalten haben  
     */ 
    document.querySelector("#greeting").innerText =`Hallo ${textField.value}`
    
    // d nutzen wir als Index für unser weekday Array
    let message = `Heute ist ${weekday[d]}`

    /**
     * Wenn es Samstag oder Sonntag ist, fügen wir Wochenende!! unserer Nachricht hinzu, 
     * andernfalls den Countdown.
     */
    message += (d == 6 || d == 7) 
      ? ". Wochenende!!" 
      : ` und wir haben noch ${5 - d} Tag${d == 4 ? "" : "e"} bis zum Wochenende.`
    
    // countdown ist ebenfalls ein leeres Element in der HTMl Datei und ändern den Text
    document.querySelector("#countdown").innerText = message
  } else {
    document.querySelector("#countdown").innerText = ""
    document.querySelector("#greeting").innerText = ""
    /**
     * Kleiner Spielerei. Wenn kein Name eingegeben wird, fügen wir einen Effekt hinzu.
     * horizontal-shaking ist in der CSS Datei definiert. 
     * setTimeout entfernt den Effekt nach 0,3 Sekunden wieder
     */
    namePrompt.style.animation = ".3s horizontal-shaking infinite"
    setTimeout(() =>  namePrompt.style.animation = "", 300)
  }
}

//Fügt die oben definiert Funktion als click Event Listener dem Button hinzu
document.querySelector("#submit").addEventListener("click", nameHandler)