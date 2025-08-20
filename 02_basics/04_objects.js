// const tindeUser = new Object()

const tinderUser ={}

tinderUser.id ="wefa"
tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.email = "john.doe@example.com"
tinderUser.isLoggedIn = true
tinderUser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"]

console.log(tinderUser);

const regularUser = {
    email: "regular.user@example.com",
    fullname: {
        firstName: "Regular",
        lastName: "User"
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.firstName);
console.log(regularUser.fullname.lastName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj5 = {...obj1, ...obj2, ...obj3}

const users = [
    {
        id: 1,
        email: "user1@example.com",
        name: "User One"
    },
    {
        id: 2,
        email: "user2@example.com",
        name: "User Two"
    },
    {
        id: 3,
        email: "user3@example.com",
        name: "User Three"
    }
]

console.log(users[1].email);
console.log(tinderUser)

console.log(Object.keys(tinderUser)); // Get keys of the object
console.log(Object.values(tinderUser)); // Get values of the object
console.log(Object.entries(tinderUser)); // Get key-value pairs of the object

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
