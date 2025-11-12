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


// Question:

// Create an array named library that contains three objects. Each object should represent a book with the following properties:
// [
//   {
//     status: {},
//   },
//   {
//     status: {},
//   },
// ];

// title: A string indicating the book's title.
// Author: A string for the author's name.
// status: An object with the following boolean properties:
// own: Whether you own the book.
// reading: Whether you are currently reading the book.
// read: Whether you have finished reading the book.

// Example:
// Book 1:
// Title: "Rich and Poor Dad"
// Author: "Leo Kortsa"
// Status: You own it, not reading, and not read.

// Book 2:
// Title: "No Sweetness Here"
// Author: "Ama Atta Aidoo"
// Status: You own it, not reading, and not read.

// Book 3:
// Title: "In the Heart of a Woman"
// Author: "Leo Kortsa"
// Status: You own it, not reading, and not read.

// Create the library array based on this information.



//1.  log the title of the second book in the library array to the console
//2.  update the status of the  third book in the library array to mark it as currently being read
//3.  you add a new book to the library with the title "New Horizons", author "Jane Doe", and status as owned but not reading or read


let library = [
  {
    title: "Rich and Poor Dad",
    author: "Leo Kortsa",
    status: {
        own: false,
        reading: true,
        read: false
    },
  },
]



// Question:

// You are asked to create an array named students that holds information about three students.
// Each student should be represented as an object with the following properties:

// name: The student's full name (string).

// course: The course they are studying (string).

// progress: An object with the following boolean properties:

// enrolled: Whether the student is enrolled in the course.

// attending: Whether the student is currently attending classes.

// completed: Whether the student has completed the course.

// Example Data:

// Name: Samuel Tetteh
// Course: Web Development
// Progress: Enrolled, not attending, not completed

// Name: Abena Boateng
// Course: Data Science
// Progress: Enrolled, not attending, not completed

// Name: Michael Ofori
// Course: UI/UX Design
// Progress: Enrolled, not attending, not completed

// Tasks:

// Log the course of the third student in the array to the console.

// Update the progress of the first student to mark them as currently attending.

// Add a new student named “Nana Adjoa” who is taking “Cybersecurity” and is enrolled but not attending or completed.


// Answer

let Student = [
    {
        Name: "Samuel Tetteh",
        Course: "Web Development",
        progress: {
            enrolled: true,
            attending: false,
            completed: false
        },
    },

    {
        Name: "Abena Boateng",
        Course: "Data Science",
        progress: {
            enrolled: true,
            attending: false,
            completed: false
        },
    },

    {
        Name: " Michael Ofori",
        Course: "UI/UX Design",
        progress: {
            enrolled: true,
            attending: false,
            completed: false
        },
    },
];

console.log(Student[2].Course)

Student[0].progress.attending = true

console.log(Student[0].progress.attending)


Student.push(
    {
        Name: "Nana Adjoa",
        Course: "Cybersecurity",
        progress: {
            enrolled: true,
            attending: false,
            completed: false,
        },
    },
);

console.log(Student)





// Scenario:

// You’ve been hired to build a small database for a music app called TuneTrack.
// Your first task is to store information about songs in the user’s playlist.

// Each song should have details about its name, artist, and whether the user owns or is currently playing it.
// Create an array called playlist that holds three songs.

// Use the data below to fill in your playlist:

// Song 1 → Title: Echoes of Time, Artist: Lara Bloom
// (You own it, not playing, not played)

// Song 2 → Title: Midnight Drive, Artist: Jay Cole
// (You own it, not playing, not played)

// Song 3 → Title: Waves of Light, Artist: Nina Stone
// (You own it, not playing, not played)

// Then, do the following:

// Log the artist of the second song to the console.

// Change the status of the first song so that it’s now currently playing.

// Add a new song titled “Golden Skies” by Alex Reed, which is owned but not playing or played.


let plalist =[
    {
        Title: "Waves of Light",
        Artist: "Lara Bloom",
       status: {
            own: true,
            playing: false,
            played: false,
        },
    },

    {
        Title: "Midnight Drive",
        Artist: "Jay Cole",
       status: {
            own: true,
            playing: false,
            played: false,
        },
    },

    {
        Title: "Waves of Light",
        Artist: "Nina Stone",
       status: {
            own: true,
            playing: false,
            played: false,
        },
    },
];

console.log(plalist[1].Artist)

plalist[0].status.playing = true

console.log(plalist[0].status. playing)

plalist.push(
     {
        Title: "Golden Skies",
        Artist: "Alex Reed",
       status: {
            own: true,
            playing: false,
            played: false,
        },
    },
);

console.log(plalist)