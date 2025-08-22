// ----------------------
// Object with Method using 'this'
// ----------------------

const user = {
    username: "manas",
    price: 999,

    welcomeMessage: function () {
        // 'this' refers to the object itself
        console.log(`${this.username}, welcome to our platform!`);
        console.log(this); // prints the entire object
    }
};

user.welcomeMessage();       // "manas, welcome to our platform!"
user.username = "mam";       // updating property
user.welcomeMessage();       // "mam, welcome to our platform!"

console.log(this); // In Node.js → {} (empty object), in Browser → window/global object


// ----------------------
// Normal Function and 'this'
// ----------------------

function chai() {
    let username = "manas";
    // In normal functions, 'this' does not refer to enclosing object here
    // It refers to global object in browsers, undefined in strict mode / Node
    console.log(this.username); // undefined
}
chai();


// ----------------------
// Arrow Function and 'this'
// ----------------------

const chaiArrow = () => {
    let username = "manas";
    // Arrow functions do NOT have their own 'this'
    // They inherit 'this' from the surrounding lexical scope
    console.log(username); // Just prints local variable
};
chaiArrow();


// ----------------------
// Arrow Functions with Return
// ----------------------

// Normal arrow function with return
const addTwo1 = (num1, num2) => {
    return num1 + num2;
};
console.log("addTwo1:", addTwo1(3, 4)); // 7

// Implicit return (no curly braces needed)
const addTwo2 = (num1, num2) => num1 + num2;
console.log("addTwo2:", addTwo2(3, 4)); // 7

// Returning an object (must wrap in parentheses)
const addTwo3 = (num1, num2) => ({ username: "manas" });
console.log("addTwo3:", addTwo3(3, 4)); // { username: "manas" }
