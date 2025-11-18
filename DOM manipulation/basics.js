//universal selector

let all = document.querySelectorAll("*");

// document.querySelector("*")

//getElememtByClassName()
let title = document.getElementsByClassName("heading");
console.log(title)


//getElementById
let container = document.getElementById("container");

// getElement byTagName

let paragraph = document.getElementsByTagName("p");

//querySelector
let heading1 = document.querySelector(".heading");

let container1 = document.querySelector("#container");

//add css
container1.style.backgroundColor = "red";
container1.style.height = "400px";
container1.style.width = "300px";
container1.style.borderRadius = "1rem"


//trial
heading1.style.color = "white";
heading1.style.paddingLeft = "4rem";
heading1.style.paddingTop = "10rem";

//How to add text to HTML
let text = document.querySelector(".new-section")

// text.textContent = "This is coming from the DOM using textContext"
// console.log(text);

// text.innerText = "Hello World"
// console.log(text);

text.innerHTML = "This is the third from the Dom"
console.log(text);

text.style.fontSize = "2rem"

//trial

let button = document.querySelector("#button")

button.textContent = "This is the assigment to style the button"
button.style.fontSize = "1.5rem";
button.style.marginTop = "2rem";
button.style.textAlign = "Center"
button.style.backgroundColor = "brown"
button.style.width = "25rem"
button.style.height = "3rem"
button.style.borderRadius = "0.5rem"
button.style.paddingTop = "1.2rem"
button.style.color = "white"
