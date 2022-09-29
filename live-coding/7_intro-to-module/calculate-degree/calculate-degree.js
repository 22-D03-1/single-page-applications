/**
 * Beim importieren können wir mit as die Variable umbennnen
 * Macht Sinn, wenn wir mehrere Variablen mit dem selben Namen importieren
 */
import { 
    calculateCelsiusToFahrenheit as cToFh, 
    calculateFahrenheitToCelsius as fhToC 
} from "../modules/degree-calculation.js"
/**
 * Wenn eine Datei einen default export hat, können wir diesen ohne {} importieren
 * und den Namen beim import vergeben
 */
import changeColor from "../modules/change-color.js"

const fahrenheitButton = document.querySelector("#calculate-fh")
const celsiusButton = document.querySelector("#calculate-c")


fahrenheitButton.addEventListener("click", () => {
    changeColor(document.querySelector("#c-to-fh-headline"))
    const degree = fahrenheitButton.previousElementSibling.value
    const calculatedDegree = cToFh(degree)
    fahrenheitButton.nextElementSibling.innerText = `${calculatedDegree} Grad Fahrenheit`
})

celsiusButton.addEventListener("click", () => {
    changeColor(document.querySelector("#fh-to-c-headline"))
    const degree = celsiusButton.previousElementSibling.value
    const calculatedDegree = fhToC(degree)
    celsiusButton.nextElementSibling.innerText = `${calculatedDegree} Grad Celsius`
})