
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    //console.log("Inside block scope:", a, b); // 10, 20
}

//console.log(a)

function one() {
    const username = "manas"

    function two () {
        const website = "youtube.com"
        console.log("Username:", username); // "manas"
    }
   // console.log(website);

    two()
}

//one()

if(true) {
    const username = "manas"
    if (username === "manas"){
        const website = "youtube.com"
        //console.log(username + website);
    }
}


//console.log(username)



//+++++++++++++++++++++++ intresting +++++++++++++++++++++


function addone(num){
    return num + 1;
}

addone(10); // 11

addTwo(5)
const addTwo = function(num){
    return num + 2;
}

