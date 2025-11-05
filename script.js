console.log("This is my javascrip code");

// variables
// arrays
// functions
// data types
// objects
// variaable declaration
//1 let variable_name/ientifier(variable declaration)
//2 let variable_name = value(variable declaration and asigning)

//1 let age;
//2 let age = 20;

let age = 20;
let container1 = "sugar";
let Name;
Name = "Lorlonyo";

console.log(Name)

// rules for naming a variable name

// 1. it can not be a reserved word or key words
// let let =12 //wrong

// 2. it can not starts with a number
// let 1bottle ="sugar" //wrong

// 3. it can not contain a space or hyphen(-)
// let bottle 1 ="sugar" //wrong
// let bottle-1 ="sugar" //wrong

// 4. they are case sensitive
let Bottle;
//bottle ="water" //wrong

// 5. they shold be meaningful

//let firstname;
//let firstName;
let first_name;

// qestion 1
// declere a variable for your name
// assign your first  name to the variable and log it onto the console


let name = "Daniel";
console.log(name)


//data types
// 1. integer: contains number eg. 1, 123, 456
// 2. float or double: contains decimal numbers eg, 0.03, 2.3
// 3. characters: contains single alphabets eg, a, x, u
// 4. string: is combination of characters
// 5. boolen: contains two values that is true or false
// 6. array
// 7.object
// 8.null


let number1 = 90; //integer or floet
console.log("this is the data type for number1", typeof number1)
let alphabet = "a"; // characters
console.log(typeof alphabet)
let country = "Ghana 2"; //string
console.log(typeof country)
let Is_Ghana_A_Country = false;
console.log(typeof Is_Ghana_A_Country)


let age1 =27;
console.log("this is the first log and the variable contains", 
    age1,
    "which data type is", typeof age1
)


// assignment
let firstName = "Daniel";
console.log(firstName)

let lastName = "Alado";
console. log(lastName)

console. log("this my first name", firstName,
    "and this is my last name", lastName,
)


// variable concatenation
let firstname = "Daniel";
let secondname = "Alado";
let fullname = firstname + secondname;

console.log("my full name is", fullname);
console.log(`This is my full name ${fullname}`);

//class work 1


let num1 = 10;
let num2 = 5;
let sum = num1 + num2;

console.log(` The sum of num1 and num2 is ${sum}`);

// constants

//const pi = 3.14
//console.log(`This is my constant ${pi}`);

//class work 2
const pi = 3.14;
const radius = 10;
let area = pi*(radius*radius);

console.log(`This is the area of the circle ${area}`);

// class work 3

let fruit1 = "Orange";
let fruit2 = "Mango";
let fruit3 = "Banana";
let fruit4 = "Pineaple";
let fruit5 = "Guava";


//Array[] : They allow you to store different simillar values in one variable

let fruits = ["Banana", "Apple", "Orange", "Mango", "Avocado"];

console.log(fruits);
console.log(fruits.length); //checking length of an array

//console.log(fruits[0])

fruits[2] = "Pineapple";

console.log(fruits);

fruits.map((fruit) => console.log(fruit))

//console.log(fruits.join("\n"));


//create an array of three integers. print in a sentence form each element at each index

let integers = [20, 60, 30];
console.log(`The value at index0 is ${integers[0]}, the value at index1 is ${integers[1]}, the value at index2 is ${integers[2]}`)

fruits.push("Coconut", "Guava"); //How to add element to array
console.log(fruits);

fruits.pop()  //How to remove element from array
console.log(fruits);

//let food =[]
//push("Wakye")

//console.log(push)

//class work4
let numbers = [5, 10, 15, 20, 25];
console.log(numbers);

numbers.pop()
console.log(numbers)

numbers.push(30);
console.log(numbers)

console.log(`The numbers are ${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}`)

//class work5

let scores = [45, 67, 89, 32, 76]
console.log(scores)

scores. pop()
console.log(scores)

scores. pop()
console.log(scores)

scores.push(76)
console.log(scores)

console.log(`The numbers are ${scores[0]}, ${scores[1]}, ${scores[2]}, ${scores[3]}`)
