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