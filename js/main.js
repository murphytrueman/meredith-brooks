let pageNumber = 0

const pages = [
  { copy: "a bitch", background: "#FFAF87", line: "#FFAF87"},
  { copy: "a lover", background: "#BFD7B5", line: "#BFD7B5"},
  { copy: "a child",  background: "#9999C3", line: "#9999C3"},
  { copy: "a mother", background: "#F0A96A", line: "#F0A96A"},
  { copy: "a sinner", background: "#C2E0EB", line: "#C2E0EB"},
  { copy: "a saint", background: "#F9B3C7", line: "#F9B3C7"},
  { copy: "not ashamed", background: "#84A59D", line: "#84A59D"},
  { copy: "your hell", background: "#FC7A57", line: "#FC7A57" },
  { copy: "your dream", background: "#7B6D8D", line: "#7B6D8D" },
  { copy: "nothing in between", background: "#FFADAD", line: "#FFADAD"}
]

const nextTag = document.querySelector(".next")
const prevTag = document.querySelector(".prev")
const randomTag = document.querySelector(".random")
const bodyTag = document.querySelector("body")
const lineTag = document.querySelector(".line")
const output = document.querySelector("h2")

const next = function() {
  pageNumber += 1

  if(pageNumber > pages.length - 1) {
    pageNumber = 0
  } 

  updateSection()
}

const prev = function() {
  pageNumber -= 1

  if(pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)
  updateSection()
}

const updateSection = function() {
  output.innerHTML = pages[pageNumber].copy
  lineTag.style.backgroundColor = pages[pageNumber].line
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener("click", function() {
  next()
})

prevTag.addEventListener("click", function() {
  prev()
})

randomTag.addEventListener("click", function() {
  random()
})

document.addEventListener("keyup", function(event) {
  if (event.key == "ArrowRight") {
    next()
  } else if (event.key == "ArrowLeft") {
    prev()
  }
})