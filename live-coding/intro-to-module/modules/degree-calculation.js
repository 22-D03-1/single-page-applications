const calculateCelsiusToFahrenheit = (celciusDegree) => {
    return (celciusDegree * 1.8 + 32).toFixed(2)
}

const calculateFahrenheitToCelsius = (fahrenheitDegree) => {
    return ((fahrenheitDegree - 32) * (5/9)).toFixed(2)
}

//Variante 1 des exports: Am Ende der Datei mit export {...} und Aufzählung, was exportiert werden soll
export { calculateCelsiusToFahrenheit, calculateFahrenheitToCelsius }