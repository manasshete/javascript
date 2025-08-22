// Immediately Invoked Function Expression (IIFE)


/* global scope ke pollution se problem hoti hai  kahi baar
 global scope ke variables overwrite ho jate hain use 
remove karne ke liye IIFE ka use karte hain*/


(function() {
    let username = "manas";
    console.log(`Hello, ${username}!`);
})();


( () => {
    console.log(`DB connected`);
} )()