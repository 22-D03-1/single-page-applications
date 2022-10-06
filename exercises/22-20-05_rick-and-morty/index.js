import getCharacter from "./module/getCharacter.js";


const button = document.querySelector("#new-character")

const fetchCharacter = async () => {
    try {
        const character = await getCharacter()

        const characterContainer = document.createElement("div")
        characterContainer.setAttribute("id", "character")
        
        const nameContainer = document.createElement("h3")
        nameContainer.innerText = character.name
    
        const speciesContainer = document.createElement("h5")
        speciesContainer.innerText = character.species
    
        const pictureContainer = document.createElement("img")
        pictureContainer.src = character.image
    
    
        document.querySelector(".container").replaceChildren(characterContainer)
        characterContainer.append(nameContainer, speciesContainer, pictureContainer)
    } catch (error) {
        console.log(error)
        return
    }

}

button.addEventListener("click", fetchCharacter)