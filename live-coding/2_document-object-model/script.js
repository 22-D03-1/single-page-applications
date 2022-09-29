//Zeigt uns das Verzeichnis, dass zu unserem Document Objekt dazugehört
console.dir(document)

//Gibt uns ein Element mithilfe der ID zurück
const headline = document.getElementById("headline")

/**
 * Gibt eine HTMl Collection mit allen Elementen mit diesem Klassennamen zurück.
 * Kann wie ein Array betrachtet werden, ist aber KEIN Array
 */ 
const paragraphs = document.getElementsByClassName("basic-text")

// Analog zu getElementsByClassName nur eben für alle Tag mit dem Namen.
const imgs = document.getElementsByTagName("img")

//Wählt das erste Element aus was den String über CSS Syntax matched
const htmlLink = document.querySelector("#link-to-html")

//Wählt alle Elemente aus die mit dem String matchen.
const listElements = document.querySelectorAll("li")

//Loopen durch eine HTML Collection bzw NodeList
for (let el of paragraphs) {
  console.log(el)
}


// Recap JS Objekt
const fruit = {
  name: "banana",
  color: "yellow",
}

fruit.delicious = true

fruit.color = "brown"
//Recap Ende

//Ändert den Text unseres HTML ELement
headline.innerText = "Unser zweiter Versuch"

//Ändert zusätzlich zum Inhalt auch das HTML 
headline.innerHTML = "<i>Unser zweiter Versuch</i>"

//Frage mit prompt den Namen ab und füge es dem innerHTML hinzu
const userName = "Ferdi"//prompt("Wie heisst du?")
const greeting = document.getElementById("greeting")
greeting.innerHTML += userName

//Ändere jegliche Attribute bspw. den placeholder unserer Elemente
const input = document.querySelector("input")
input.placeholder = "Search"

greeting.style.color = "blue"

greeting.classList.add("larger-font")

greeting.classList.remove("test")

console.log(greeting.classList.contains("test"))