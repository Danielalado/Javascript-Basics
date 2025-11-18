let Daniel = "Firstname";
console.log(Daniel)

function print () {
    console.log("This is my first function")
}

print ()

function add () {
  let num1 = 20;
  let num2 = 18;
  let sum = num1 * num2; 
  console.log(sum)
}

add ()

function multiplication ( num1, num2) {
    multiply = num1 * num2;
    console.log(multiply)
}

multiplication (10,10)
multiplication (14, 3)


function name (Firstname, Surname) {
    // Surname = "Alado"
    console.log(
        `This is my first name ${Firstname}`, `and my surname is ${Surname}`);
}

name ("Selorm", "Amenyo")
name ("Daniel")

let age = 19;

if (age < 18) {
    console.log("The person is not eligible to vote")
} else{
console.log("The person is eligible to vote")
};
