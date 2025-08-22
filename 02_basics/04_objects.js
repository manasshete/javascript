// ----------------------
// Object Creation
// ----------------------

// Method 1: Using constructor
// const tinderUser = new Object();   // Singleton object

// Method 2: Using object literal
const tinderUser = {};  

// Adding properties dynamically
tinderUser.id = "wefa";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.email = "john.doe@example.com";
tinderUser.isLoggedIn = true;
tinderUser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"];

console.log("Tinder User:", tinderUser);


// ----------------------
// Nested Objects
// ----------------------

const regularUser = {
    email: "regular.user@example.com",
    fullname: {
        firstName: "Regular",
        lastName: "User"
    }
};

console.log("Fullname Object:", regularUser.fullname);
console.log("First Name:", regularUser.fullname.firstName);
console.log("Last Name:", regularUser.fullname.lastName);


// ----------------------
// Object Merging
// ----------------------

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// ✅ Using Object.assign({}, ...)
const obj4 = Object.assign({}, obj1, obj2, obj3);

// ✅ Using Spread Operator (modern & cleaner)
const obj5 = { ...obj1, ...obj2, ...obj3 };

console.log("Merged using assign:", obj4);
console.log("Merged using spread:", obj5);


// ----------------------
// Array of Objects (Most common in APIs/DB results)
// ----------------------

const users = [
    { id: 1, email: "user1@example.com", name: "User One" },
    { id: 2, email: "user2@example.com", name: "User Two" },
    { id: 3, email: "user3@example.com", name: "User Three" }
];

// Accessing user by index
console.log("Email of 2nd user:", users[1].email);


// ----------------------
// Object Utility Methods
// ----------------------

console.log("Tinder User again:", tinderUser);

// ✅ Object.keys() → Returns array of keys
console.log("Keys:", Object.keys(tinderUser));  

// ✅ Object.values() → Returns array of values
console.log("Values:", Object.values(tinderUser));  

// ✅ Object.entries() → Returns [key, value] pairs
console.log("Entries:", Object.entries(tinderUser));  

// ✅ hasOwnProperty() → Checks if property exists in object
console.log("Has isLoggedIn?", tinderUser.hasOwnProperty("isLoggedIn"));



// ----------------------
// Object Example
// ----------------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "manas"
};

// Accessing properties directly
// console.log(course.courseInstructor);

// ----------------------
// Object Destructuring
// ----------------------

// Instead of: const instructor = course.courseInstructor;
// We can use destructuring to extract properties
const { courseInstructor: instructor } = course;

console.log("Course Instructor:", instructor);
// Output → Course Instructor: manas


// ----------------------
// JSON Example
// ----------------------
// JSON (JavaScript Object Notation) looks like an object
// BUT all keys must be in double quotes "" and it's often used for data exchange.

const jsonExample = `{
    "coursename": "js in hindi",
    "price": "999",
    "courseInstructor": "manas"
}`;

console.log("JSON String:", jsonExample);
