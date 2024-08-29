// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.valueOf());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());


//! IMPORTANT NOTE: DATE is a "Object", not a primitive

//console.log(typeof myDate); // => "object"

let newDate = new Date(2023,5,8,4,5);
console.log(newDate.toString());

// let newDate = new Date("2023-1-18");
//let newDate = new Date("08-30-2023");   // in india we prefer mm-dd-yyyy system 
// console.log(newDate.toLocaleString());



//Time stamp is use in creating polls for timely updates

// let myTimeStamp = new Date().now();
let myTimeStamp = Date.now (); // we can also use "Date.now()"

console.log(myTimeStamp);   // We get data in miliseconds
//console.log(newDate.getTime());    // We get data in miliseconds




//*** IMPORTANT NOTE: For Interviews we need to get data in Seconds

console.log(Math.floor(myTimeStamp/1000));   // We get data in Seconds

let newDate2 = new Date();
console.log(newDate2.getDay());


// `${newDate.getDay()} and the time `

newDate2.toLocaleString('default', {
    weekday: "long",
    
})