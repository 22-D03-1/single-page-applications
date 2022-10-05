import characters from "./characters.js"

export default () => {
  return new Promise((resolve, reject) => {
    const randNumber = Math.floor(Math.random() * 20) 
    setTimeout(()=> {
      resolve(characters[randNumber])
    }, 2000)
  })
}
