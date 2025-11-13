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

calculateRetangleArea (20, 44)


function greet (name) {

    console.log(`Hello ${name}`)
}

greet ("Selorm");


//Create a JavaScript object  with the properties name, engine, and color.
//Then, write a function that takes the car object as a parameter and returns a string in this format:

//"The name of my car is [name], it is [color] in color and it has a [engine] engine."
 
//Answer

let car = {
    nAme: "BMW",
    engine: 4.8,
    color: "Blueblack",
};

function carName (car) {
  return  console.log(`The name of my car is ${car.nAme}, it is ${car.color} in color and it has a ${car.engine}`)
}

carName (car)



//conditional statements

// if
// if ...else
// if ...else if

// sythax if
// if (condition) {
    //code to execute if condition is true
// }

// sythax if ...if
// if (condition) {
    //code to execute if condition is true
// } else {
    // code to execute if condition is false
// }


// let x = 12;
// let y = 3;

// if (x > y){
//     console.log(`The number ${x} is greater than the number ${y}`);
// } else{
//     console.log(`The number ${x} is rather less than the number ${y}`);
// }


//trial
// let age = 30;

// if (age < 18) {
//     console.log (`The person is not eligible to vote`);
// } else{
//     console.log(`The person is eligible to vote`)
// }



// if (condition) {
//    //code to run 
// } else if (condition) {
//    //code to run 
// } else if (condition) {
//     //code to run
// } else {

// }


// trial 

let temperature = 15;

if (temperature > 25)
    {
    console.log(`It is extremely hot in Ghana`)
} else if (temperature > 15) 
    {
    console.log(`It is a hot day`)
} else if (temperature > 10) 
    {
    console.log(`It is not a hot day`)
} else {
    console.log(`It is cold day`)
};