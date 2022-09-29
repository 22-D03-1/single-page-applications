import jokes from "jokes"

const joke = jokes()

const jokeElement = document.querySelector("#joke")

jokeElement.innerText = joke.text