import jokes from "jokes"

const joke = jokes()

console.log(joke)

const jokeElement = document.querySelector("#joke")

jokeElement.innerText = joke.text