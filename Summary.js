// Primitive 

//  7 types : String ,Number,Boolean,null,undefined,Symbol,BigInt


//  Reference  (Non {primitive})

// Array ,Object,Functions

const score = 100;
const scoreval = 100.3;
let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(myobj);
const myFunction = function(){
    console.log("Ankit");
}
let userOne = {
    email : "user@google.com",
    upi: "user@ybl"

}
let UserTwo = userOne;
UserTwo.email = "Ankit"
console.log(userOne.email);
console.log(UserTwo.email);
