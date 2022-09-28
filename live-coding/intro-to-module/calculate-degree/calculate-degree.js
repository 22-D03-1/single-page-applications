import { 
    calculateCelsiusToFahrenheit as cToFh, 
    calculateFahrenheitToCelsius as fhToC 
} from "../modules/degree-calculation.js"
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