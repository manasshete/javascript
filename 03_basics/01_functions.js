// ----------------------
// Basic Function Example
// ----------------------

// Function with return value
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result; // returns the sum instead of just printing
}

const result = addTwoNumbers(5, 10);
console.log("Result of addition:", result);


// ----------------------
// Functions with Parameters
// ----------------------

function userLoggedIn(username) {
    return `${username} just logged in`;
}

console.log(userLoggedIn("manas")); // "manas just logged in"


// ----------------------
// Handling Undefined Parameters
// ----------------------

function loginUserMessage(username) {
    if (username === undefined) {
        return "User is not logged in"; 
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // no argument → "User is not logged in"


// ----------------------
// Rest Operator (...)
// ----------------------
// Collects all remaining arguments into an array

function calculateCartPrice(val1, val2, ...num1) {
    return num1; 
}

console.log(calculateCartPrice(200, 400, 600, 700, 800));
// Output: [600, 700, 800]
// First 2 values go to val1 & val2, rest go into num1[]


// ----------------------
// Passing Objects to Functions
// ----------------------

const user = {
    username: "manas",
    prices: 199
};

function handleObject(anyobject) {
    // NOTE: property name should match → 'price' not 'prices'
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Passing object directly
handleObject({
    username: "manas",
    price: 11100000000
});


// ----------------------
// Passing Arrays to Functions
// ----------------------

const myNewArr = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {
    return getArray[1]; // returns the 2nd element (index 1)
}

// Using array directly
console.log(returnSecondValue([10, 20, 30, 40, 50])); // 20
