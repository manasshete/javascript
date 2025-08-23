const userEmail = "user@example.com";

if(userEmail) {
    console.log("Email is set");
}else{
    console.log("Email is not set");
}




// falsy values

// false
// 0
// -0
// "" // empty string
// null
// undefined
// NaN
// BigInt 0n


// truthy values
// "0"
// 'false'
// function () {}
// true
// 1
// "non-empty string"
// []
// {}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
 
// nullish coalescing operator (??)

let val = null;
val = val ?? "default value"

console.log(val);
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 10
 val1 = null ?? 10 ?? 20


console.log(val1)



// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");
