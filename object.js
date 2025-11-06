let Name1 = "Figo";
let age = "22";
let favFood = "mango";
let profession = "nurse";

let Name2 = "Gifty";
let age2 = "15";
let favfood = "Banku";
let profesion = "student";

let person1 = {
    //key -value pair
    name: "Figo",
    age: 22,
    favFood: "mango",
    profession:"nurse",
};

let person2 = {
// key - value pair
name: "Gifty",
age: 15,
favFood: "Banku",
profession: "pharmacist",
hobbies: ["reading", "watching", "running"]
};

console.log(`This it person one ${JSON.stringify(person1)}`);
console.log(person1)

//acess with the dot notation
console.log(`${person1.name}`)
console.log(`${person1.profession}`);

//acess with the bracket notation
console.log(`${person2["age"]}`);

//acess element in array
console.log(`${person2.hobbies[2]}`);

//update
person2.name = "Dede";

console.log(`${person2.name}`)

//add to object
person1.salary = 600;
console.log(person1)

// to delate
delete person2.age
console.log(person2)


let daniel ={
    Name: "Daniel Alado",
    Role: "Student Nurse",
    Age: "30",
    id: 123456789,
    course: "General Science",
    //element: ["train", "code", "eat", "sleep"]
    //school:
}

console.log(daniel)

//update
daniel. element = ["train", "code", "eat", "sleep"],
console.log(daniel)

//add
daniel.school = "Mawuli",
console.log(daniel)

console.log(`My name is ${daniel.Name} I completed ${daniel.school} and I Read ${daniel.course} and I am now ${daniel.Role} I will make sure I ${daniel.id} well`)



//Nested objects
let locations = {
    address:{
        cords:{
            lat:88.76,
            long:12.37,
        },
    },
};

console.log(`${locations.address.cords.lat}`)
console.log(`${locations.address.cords.long}`)

//the spread operator (...)
const citrusFruits =["pineapple", "Papaya"];
console.log(citrusFruits)

const otherFruits =["banana", "apple"];
console.log(otherFruits);

const Allfruits = [...citrusFruits, ...otherFruits];
console.log(Allfruits);

const numbers = [1, 2, 3];
const count = [0, ...numbers, 4, 5, 6];
console.log(count);

let user = {name: "Leo", age: 25}
let extra = {country: "Ghana", Job: "Developer"}
let fulluser = {...user, ...extra}
console.log(fulluser)


//Trials

const setA = [1, 2, 3];
const setB = [4, 5, 6]
combinedSet = [...setA, ...setB]
console.log(combinedSet)

const extendedSet = [0, ...combinedSet]
console.log(extendedSet)