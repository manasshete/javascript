// if

const isUserLoggedIn = true;
const temperature = 41;

if ( temperature === 41) {
    console.log("Temperature is 41");
} else {
    console.log("Temperature is not 41");
}

// < , > , <= , >=, != , ===  , !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`) // error

const balance = 1000;

if (balance < 500){
    console.log("less than");
} else if (balance > 500) {
    console.log("greater than");
} else {
    console.log("equal");
}




const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = false; 
const loggedInFromGoogle = true;


if(userLoggedIn && debitCard){
    console.log("Allow user to buy course");
} else if (loggedInFromEmail) {
    console.log("Allow user to buy course with email");
}



if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow user to buy course with Google");
}

