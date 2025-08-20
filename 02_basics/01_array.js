// ----------------------
// Array Creation
// ----------------------

const myArr = [0, 1, 2, 3, 4, 5];       // Basic array of numbers
const myHeroes = ["Shaktiman", "Batman"]; // Array of strings

// Another way of creating an array using constructor
const myArr2 = new Array(1, 2, 3, 4, 5);  

console.log("First element of myArr:", myArr[0]);


// ----------------------
// Array Methods (Push, Pop, Unshift, Shift)
// ----------------------

// Push → Add element at the end
myArr.push(6);   

// Pop → Remove element from the end
myArr.pop();      

console.log("After push & pop:", myArr);

// Unshift → Add element at the beginning
myArr.unshift(-1);

// Shift → Remove element from the beginning
myArr.shift();

console.log("After unshift & shift:", myArr);


// ----------------------
// Search Methods (includes, indexOf)
// ----------------------

console.log("Does myArr include 9?", myArr.includes(9)); // false
console.log("Index of element 3:", myArr.indexOf(3));    // 3 (if present)


// ----------------------
// Slice vs Splice
// ----------------------

console.log("Original Array (A):", myArr);

// slice(start, end) → Extracts a section of the array (non-destructive)
const myn1 = myArr.slice(1, 3);
console.log("Slice result:", myn1);
console.log("Array after slice (B):", myArr); // Original remains unchanged

// splice(start, count) → Removes/replaces elements (destructive)
const myn2 = myArr.splice(1, 3);
console.log("Array after splice (C):", myArr); // Modified array
console.log("Splice result:", myn2);           // Elements that got removed
