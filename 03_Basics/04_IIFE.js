//  Immediately Invoked Function Expressions (IIFE)

// We use IIFE for clear the polution which is created by Global Scope

// function chai() {
//   console.log(`DB CONNECTED`);
// }
// ();  // Syntax error


(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
  })
  ();    // In IIFE we need to write our function in Paranthesis and 
  //    at last end with ; for execute another function otherwise we will get error


  // IIFE uses in ARROW Functions

  const AnyValue = (num) => {
    console.log(` Your age is ${num}`)
    return num;
  }
  AnyValue(19);


( (num) => {
    // Unnamed IIFE
    console.log(`Your age is ${num}`)
    return num;
  })
  (24)     // We don't have to write const for arrow function in IIFE