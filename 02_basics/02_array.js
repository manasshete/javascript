// ----------------------
// Array Merging (Concat vs Spread)
// ----------------------

const marvel_heroes = ["Iron Man", "Thor", "Hulk", "Black Widow"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash"];

// ❌ If we do marvel_heroes.push(dc_heroes), 
// it will insert the whole dc_heroes array as a single element inside marvel_heroes.
// console.log(marvel_heroes);

// ✅ Using concat (creates a new array, does NOT modify originals)
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log("All Heroes (using concat):", all_heroes);

// ✅ Using spread operator (cleaner & modern way to merge arrays)
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log("All Heroes (using spread):", all_new_heroes);


// ----------------------
// Flattening Nested Arrays
// ----------------------

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(Infinity) → Flattens array to any depth
const real_flattened_array = another_array.flat(Infinity);
console.log("Flattened Array:", real_flattened_array);


// ----------------------
// Array Utility Methods
// ----------------------

console.log(Array.isArray("manas"));  
// false → because "manas" is a string, not an array

console.log(Array.from("manas"));     
// Converts string into array of characters → ['m', 'a', 'n', 'a', 's']

console.log(Array.from({ name: "manas" }));  
// ❓ Interesting: returns [] (empty array) because object is not iterable 
// unless we specify how to convert it. Great interview trick question!


// ----------------------
// Array.of()
// ----------------------

let score1 = 100, score2 = 200, score3 = 300;

// Array.of() → Creates a new array from arguments (unlike new Array() which can behave differently)
console.log(Array.of(score1, score2, score3)); 
// Output → [100, 200, 300]
