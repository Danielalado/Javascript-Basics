let Leo = "Good moorning Leo";
let Figo = "Good moorning Figo ";
let Sunday = "Good moorning Sunday";

console.log(Leo)

//synthax for declaring a function

//function function_name () {
// block of codes
// }

function print () {
    console.log("This is my first function");
}

//calling a function
print();

function add () {
    let num1 = 10;
    let num2 = 4;
    let sum = num1 + num2;
    console.log(sum)
}

add ()

function add2 () {
    let num1 = 30;
    let num2 = 7;
    let sum = num1 + num2;
    console.log(sum)
}

add2 ()

//function parameters and arguments
function Addition(num1, num2){
    sum = num1 + num2;
    console.log(sum);
}

Addition(23, 80)
Addition(22, 44)
Addition(23, 78)


//trial

function My_Name (first_name) {
console.log(`This is my first ${first_name}`);
}

My_Name ("Daniel")

function myname (firstname, surname) {
    surname = "Kofi";
    console.log(
        `this is my first name ${firstname}`, `and my surname is ${surname}`
    );
    return;
}

myname("Alex")
myname("Sunday")



// trial

function calculateRetangleArea (length, width) {
    multiply = length * width;
    console.log(multiply)
}

calculateRetangleArea (20, 44533)


function greet (name) {

    console.log(`Hello ${name}`)
}

greet ("Selorm");
