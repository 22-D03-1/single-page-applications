const headlineDV = document.querySelector("#darth-vader-name")
const headlineLS = document.querySelector("#luke-skywalker-name")

/**
 * fetch() umd GET request zu senden
 */


//const randNum = Math.floor()
console.log("1")
fetch("https://swapi.dev/api/people/4")
    .then((response)=> {
        console.log("2")
        if(response.status === 200) {
            /**
             * response.json() gibt ein Promise zurück, dass resolved ein Objekt der
             * JSON ist, die unsere API uns zurpck gegeben hat
             */
            return response.json()
        } else {
            /**
             * Ein unerfolgreicher fetch (nicht Status 200) wirft keinen Fehler
             * Das können wir aber mit throw new Error("Erro Nachricht") selber machen
             * Analogy: Es wird ein Fehler geworfen (throw) und wir können ihn abfangen mit try catch 
             * */
            throw new Error("Kein Charakter gefunden")
        }
    }).then((result) => {
        console.log("3")
        headlineDV.innerText = result.name
    }).catch((error) => {
        console.log(error)
    })

/**
 * fetch() mit async await
 */
console.log("4")
const getCharacter = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/1")

        console.log("5")

        if (response.status === 200) {
            const result = await response.json()
            console.log("6")
            headlineLS.innerText = result.name
        } else {
            throw new Error("Kein Charakter gefunden")
        }
    } catch (error) {
        console.log(error)
    }
}

getCharacter()


/**
 * fetch() umd einen POST request zusenden
 */


const postCharacter = async () => {
    const profile = {
        name: "Lighning Man"
    }

    try {
        const response = await fetch("https://my-json-server.typicode.com/22-D03-1/test-api/profile", {
            method: "POST",
            body: JSON.stringify(profile)
        })
        if (response.status !== 201) {
            throw new Error(`POST nicht erfolgreich. Wir haben Status ${response.status} bekommen.`)
        } 
    } catch (error) {
        console.error(error)
    }
}
postCharacter()