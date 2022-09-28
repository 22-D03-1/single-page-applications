
import { calculateCelsiusToFahrenheit, calculateFahrenheitToCelsius } from "../modules/degree-calculation.js"
import * as degreeConstants from "../modules/degree-constants.js"

const button = document.querySelector("#toggle-degree")
const text = document.querySelector("#boiling-water-text")

button.addEventListener("click", ()=> {
    /*
    const isFahrenheit = button.innerText == "Fahrenheit"
    button.innerText = isFahrenheit ? "Celsius" : "Fahrenheit"

    const boilingWater = isFahrenheit ? calculateCelsiusToFahrenheit() : calculateFahrenheitToCelsius() 

    text.innerText = isFahrenheit ? boilingWater + " Grad Fahrenheit" : boilingWater + " Grad Celsius" */

    // Refactoring der Iternary Operator zu einem besser lesbaren Code

    if(button.innerText == "Fahrenheit") {
        button.innerText = "Celsius"
        text.innerText = calculateCelsiusToFahrenheit(degreeConstants.boilingCelsius) + " Grad Fahrenheit"
    } else {
        button.innerText = "Fahrenheit"
        text.innerText = calculateFahrenheitToCelsius(degreeConstants.boilingFahrenheit) + " Grad Celsius"
    }

})