const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const bookList = document.querySelector(".book-list")

console.log(bookList.children)

books.forEach((book) => {
  const listElement = document.createElement("li")
  listElement.classList.add("card", "book")

  const body = document.createElement("section")
  body.classList.add("card-body")
  const footer = document.createElement("section")
  footer.classList.add("card-footer")

  const title = document.createElement("h2")
  title.innerText = book.title
  title.classList.add("card-title", "title")

  const img = document.createElement("img")
  img.src = book.img
  img.classList.add("book-cover")

  const author = document.createElement("p")
  author.innerText = book.author
  img.classList.add("card-text")

  const status = document.createElement("span")
  status.innerText =  book.alreadyRead ?  "Gelesen" : "Ungelesen"

  /**
   * Fügt ein neues Kind unserem Parent hinzu
   * Unterschiede append und appendChild:
   * - append() nimmt alles entgegen und appendChild() nur Node Objekte
   * - append() gibt nichts zurück und appendChild() die hinzugefügte Node
   * - append() kann mehrere Elemente entgegen nehmen und appendChild() nur eins
   */
  listElement.append(img, body, footer)
  body.append(title, author)
  footer.appendChild(status)
  bookList.appendChild(listElement)

})

console.log(bookList.children)

/* 
//Alle Li Blankos auswählen
const bookElements = document.querySelectorAll("li")

bookElements.forEach((el, index) => {
  el.classList.add("card", "book")

  const [ body, footer ] = el.querySelectorAll("section")
  body.classList.add("card-body")
  footer.classList.add("card-footer")

  const title = el.querySelector("h2")
  title.innerText = books[index].title
  title.classList.add("card-title", "title")

  const img = el.querySelector("img")
  img.src = books[index].img
  img.classList.add("book-cover")

  const author = el.querySelector("p")
  author.innerText = books[index].author
  img.classList.add("card-text")

  const status = el.querySelector("span")
  status.innerText =  books[index].alreadyRead ?  "Gelesen" : "Ungelesen"

  //Übergeordnetes Element. Rückgabe ist EIN Element
  console.log(title.parentElement)

  //Untergeordneten Elemente. Rückgabe Collection mit mehreren Elementen
  console.log(footer.children)

  // Gibt den nächsten/vorherigen Sibling zurück. Häufig ist das ein von uns nicht definierter Line Break
  console.log("Nächster Sibling: ", title.nextSibling)
  console.log("Vorheriger Sibling", body.previousSibling)

  // Gibt den nächsten/vorherigen Sibling zurück und ignoriert Line Breaks
  console.log("Nächster Element Sibling:", title.nextElementSibling)
  console.log("Vorheriger Element Sibling", body.previousElementSibling)

}) */
