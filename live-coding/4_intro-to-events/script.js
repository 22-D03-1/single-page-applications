const tollButton = document.querySelector("#toller-button")
const okButton = document.querySelector("#ok-button")
const htmlBody = document.querySelector("body")

/**
 * Variante 1 zum Event Handling. Ändern des Parameter onclick unseres
 * Button Element
 */
tollButton.onclick = () => {
  console.log("klick 1")
  /**
   * Entfernt den Event Listener
   * Benötigt Event Art und Name der Funktion, die entfernt werden soll
   * Funktion darf nicht anonym sein, sprich innerhalb des addEventListener Aufruf deklariert.
   */
  okButton.removeEventListener("click", okButtonEventHandler)
}

/**
 * Variante 2 zum Event Handling. Methode addEventListener
 * Erwartet mind. 2 Parameter: 
 * 1. String mit Art des events (click, mouseover etc.)
 * 2. Funktion, die ausgeführt werden soll
 */

//Definieren Funktion und ordnen sie der Variable zu
const okButtonEventHandler = () => {
  console.log("Klack 2")
}

// Nutzen die Methode addEventListener um für die Eventrt click die deklarierte Funktion zuzuordnen
okButton.addEventListener("click", okButtonEventHandler)

/**
 * Event zum Hovern des Buttons inklusive Optionen Objekt. Option once, stellt sicher, 
 * dass Funktion nur einmal ausgeführt wird
*/
okButton.addEventListener("mouseover", () => {
  console.log("Huhu")
}, {once: true})

/**
 * Keyboard Events können wir mit bspw keyup abfangen
 * Wenn wir der EventHandler Funktion einen Parameter übergeben,
 * Haben wir Zugriff auf das Event Objekt. Für Keywprd Events ist
 * der Name der Taste unter code gespeichert.
 */
htmlBody.addEventListener("keyup", (e)=> {
  console.log(e)
  const message = document.createElement("p")
  switch(e.code){
    case "Space":
      message.innerText = "Spaceship";
      break;
    case "Enter":
      message.innerText = "Enter the Gate";
      break;
  }
  htmlBody.append(message)
})