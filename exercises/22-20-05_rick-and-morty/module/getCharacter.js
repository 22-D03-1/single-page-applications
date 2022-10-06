import characters from "./characters.js"


/** 
 * ----Recap was ist ein Promise----
 * */

/* export const testFunk = () => {
  const number = 12
  const name = "Hansi"
  
  return new Promise((resolve, reject)=> {
    const randNumber = Math.floor(Math.random() * 10)
    if (randNumber < 5) {
      resolve(number)
    } else {
      resolve(name)
    }
  })
} */


/**
 * Default Export ist die Hauptfunktion unserer Datei und wird ohne {} importiert
 * Aißerdem wird beim import auch ein Name für die Funktion frei ausgewählt 
 * */
export default () => {
  return new Promise((resolve, reject) => {
    const randNumber = Math.floor(Math.random() * 20) 
    setTimeout(()=> {
      resolve(characters[randNumber])
    }, 2000)
  })
}
