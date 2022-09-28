const randColor = () => {
    const random = () => Math.floor(Math.random() * 256)

    return `rgb(${random()}, ${random()}, ${random()})`
}

export default (element) => {
    element.style.color = randColor()
}