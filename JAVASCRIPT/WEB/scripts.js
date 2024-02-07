/*const element = document.querySelector(".paragraph-js")


element.textContent = "Texto novo <b>Ola</b>"

element.innerHTML = ""
    
console.log(element.textContent) //so html
console.log(element.innerText) //leva em conta o css
console.log(element.innerHTML) // tras tudo -> Permite adicionar HTML



const button = document.querySelector("h1")

button.style.backgroundColor = "red"
button.style.color = "#ffffff"
button.style.fontSize = "100px"


const input = document.querySelector("#main-input")
const paragrafo = document.querySelector(".novo-paragrafo")

function cliqueiNoBotao(){
    paragrafo.innerHTML = input.value
}

function digiteiNoInput(){
    console.log("Digitei no input")
}*/


const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiValor(event){
    console.log(event)
}


button.addEventListener("click", troqueiValor)

button.addEventListener("click", function(event){
    console.log(event)
})

