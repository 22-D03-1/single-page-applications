// Da wir randColor nicht exportieren, haben die anderen dateien keinen Zugriff darauf
const randColor = () => {
    const random = () => Math.floor(Math.random() * 256)

    return `rgb(${random()}, ${random()}, ${random()})`
}

//die als default exportierte Funktion bekommt keinen Namen
export default (element) => {
    element.style.color = randColor()
}