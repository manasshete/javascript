//  primitive 

// 7 types : String, number , boolean, null, undefined, symbol, bigint


const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, because symbols are unique
const bigintValue = 1234567890123451234567890n; // n at the end indicates a BigInt


// Reference (Non Primitive)

//  Array,Object, Function


const heros = ['Superman', 'Batman', 'Wonder Woman'];

let myobject = {
    name: 'Batman',
    age: 35,
    isHero: true
}

const myFunction = function() {
    console.log('Hello from myFunction');
}

myFunction();




// * Premitive Datatypes

//                   Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)


//   1.Number:
//         Represents both integers and floating-point numbers.
//         Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
//         Smallest Increment: 2^(-52).

//     2.String:
//         Represents a sequence of characters.
//         No specific range limit, but practical limits depend on memory and system resources.

//     3.Boolean:
//         Represents true or false.
//         Only two possible values: true and false.

//     4.Undefined:
//         Represents a variable that has been declared but hasn't been assigned a value.
//         It has only one possible value: undefined.

//     5.Null:
//         Represents the intentional absence of any object or value.
//         It has only one possible value: null.

//     6.Symbol (ES6):
//         Represents a unique and immutable value.
//         No specific range limit.

//     7.BigInt (ES11):
//         Represents large integers that cannot be represented by the Number type.
//         The range is practically unlimited and depends on available memory




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap (non-primitive)

let myYoutubeName = "mannas";

let anotherName = myYoutubeName;
anotherName = "diddy";


console.log(myYoutubeName);
console.log(anotherName);


let userOne= {
    email : "manas@gmail.com",
    upi : "manas@upi"
}

let userTwo = userOne;

userTwo.email = "diddy@google.com";

console.log(userOne.email);
console.log(userTwo.email);


// 🗂 Stack Memory
// Purpose: Stores static memory — function calls, local variables, and references.

// Access Speed: Very fast.

// Management: Automatically managed (push/pop with function calls).

// Lifetime: Data exists until the function ends.

// Size: Limited (small compared to heap).


// 📦 Heap Memory
// Purpose: Stores dynamic memory — objects, arrays, closures.

// Access Speed: Slower than stack.

// Management: Manually managed (JavaScript uses Garbage Collection).

// Lifetime: Data stays until no references remain.

// Size: Much larger than stack.

// In short:

// Stack = Organized, fast, short-lived data.

// Heap = Flexible, big, long-lived data.