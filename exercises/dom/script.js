const randColor = () => {
  const random = () => Math.floor(Math.random() * 256)

  return `rgb(${random()}, ${random()}, ${random()})`
}

// Teil 1
const title = document.querySelector(".title")
title.style.font =  "80px Arial"

// Teil 2
const foodCategory = document.getElementsByClassName("food-category")

console.log(foodCategory)

for (let el of foodCategory) {
  el.style.backgroundColor = randColor()
}

// Teil 3
const warning = document.getElementById("warning")
warning.style.textAlign = "center"