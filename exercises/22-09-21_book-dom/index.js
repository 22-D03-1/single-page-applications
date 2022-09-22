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

//Alle Li Blankos auswählen
const bookElements = document.querySelectorAll("li")

console.log(bookElements)

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

})