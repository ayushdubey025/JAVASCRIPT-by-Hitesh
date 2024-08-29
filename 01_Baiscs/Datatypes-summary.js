// JavaScript is considered to be dynamically typed

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // return type - number

const scoreValue = 100.3 // return type - number

const isLoggedIn = false // return type - boolean

const outsideTemp = null // return type - null

let userEmail;   // return type - Undefined

const id = Symbol('123') // Symbol is a reserved keyword and can be used to refer to a 
                        // variable
                        // return type - 'symbol'
                        
const anotherId = Symbol('123')  // return type - symbol


//console.log(id === anotherId);  // return => false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions --- show Object datatypes 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}                                 // return type - function

//console.log(typeof anotherId); // return type - symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive),    Heap (Non Primitive)

let myname1 = "ayush";

let myname2 = myname1;

myname2 = "dubey";

console.log(myname1);
console.log(myname2);

let user1 ={
    email: "ayush@gmail.com",
    upi: "1234567890"
}

let user2 = user1;

user2.upi = "9876543210";

console.log(user1.upi);
console.log(user2.upi);

const arr = [2,4,5,7]

const arr1 = arr

arr1[2] = 6
console.log(arr[2])
console.log(arr1[2])