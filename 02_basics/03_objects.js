// ----------------------
// Object Creation in JS
// ----------------------

// 1. Singleton object → using Object.create()
// const obj = Object.create({});

// 2. Object literal → most common way
const mySym = Symbol("key1"); // Creating a unique symbol as an object property key

const JsUser = {
    name: "manas",
    "Full name": "Manas Shete",     // Key with space → must use quotes
    [mySym]: "myKey1",              // Using symbol as a key (always unique)
    age: 18,
    email: "manas@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
};


// ----------------------
// Accessing Object Properties
// ----------------------

console.log(JsUser.email);       // Dot notation
console.log(JsUser["email"]);    // Bracket notation
console.log(JsUser["Full name"]); // Needed when key has spaces
console.log(JsUser[mySym]);      // Accessing symbol property


// ----------------------
// Modifying Object Properties
// ----------------------

JsUser.email = "newemail@example.com";

// Object.freeze(JsUser);   // Uncomment to freeze object (prevents modification)

JsUser.email = "anotheremail@example.com"; // Works only if not frozen
console.log("Updated Email:", JsUser.email);


// ----------------------
// Adding Methods to Objects
// ----------------------

// First method definition (will be overwritten later)
JsUser.greeting = function () {
    console.log("Hello user");
};

// Second method definition (overrides the first one)
JsUser.greeting = function () {
    console.log(`Hello user, ${this.name}`); // 'this' refers to the current object
};


// ----------------------
// Calling Methods
// ----------------------

console.log(JsUser.greeting);   // Prints function definition
console.log(JsUser.greeting()); // Executes function → "Hello user, manas"
