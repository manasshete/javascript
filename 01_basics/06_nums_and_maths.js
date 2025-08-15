// ================== Number Basics ==================

// Declaring a primitive number
const score = 400; 
// console.log(score); // Output: 400

// Creating a Number object (less common, mostly for special methods)
const balance = new Number(100);
// console.log(balance); // Output: [Number: 100]

// Convert number to string & check length
// console.log(balance.toString().length); // "100" → length = 3

// Format number to fixed decimal places
// console.log(balance.toFixed(2)); // Output: "100.00"

// ---------------- Precision Formatting ----------------
const otherNumber = 23.8966;

// toPrecision() formats to specified total digits
// console.log(otherNumber.toPrecision(4)); // Output: "23.90"

// ---------------- Locale Formatting ----------------
const hundreds = 1000000;
// Convert number to local format (India example)
// console.log(hundreds.toLocaleString('en-IN')); // Output: "10,00,000"

// ================== Math Object Basics ==================

// console.log(Math); // Shows all Math methods
// console.log(Math.abs(-4));      // Absolute value → 4
// console.log(Math.round(4.6));   // Rounds to nearest integer → 5
// console.log(Math.ceil(4.1));    // Rounds UP → 5
// console.log(Math.floor(4.9));   // Rounds DOWN → 4
// console.log(Math.min(4, 5, 6)); // Smallest → 4
// console.log(Math.max(4, 5, 6)); // Largest → 6

// ---------------- Random Numbers ----------------

// Math.random() → generates a number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); 

// Generate random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// ---------------- Random Number in Range ----------------
const min = 10;
const max = 20;

// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// This ensures the number is between 'min' and 'max' inclusive
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
