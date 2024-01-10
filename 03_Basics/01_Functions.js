// FUNCTIONS

function MyName() {
  console.log("Ayush");
  console.log("Dubey");
}

// MyName()   // Execution

// Add two Numbers

// function Addnum(num1, num2) {
//   console.log(num1 + num2);
// }

function Addnum(num1, num2) {
  //  METHOD 1 ===>>>  let result = num1 + num2;
  //                   return result;

  // METHOD 2 ===>>>
  return num1 + num2;
}

const result = Addnum(4, 2);

// console.log(result);

function UserNameMessage(username)
 {
  if (!username) //(username === undefined)
   {
    
    console.log("Please enter your name");
    return;
  }
  return `${username} logged in!`;
}
// const name = UserNameMessage();
// console.log(name)



function Anynumber(value1, value2, ...num1)
 {
   // IMPORTANT for INTERVIEW => [44,53,45]
  return num1;
}
// console.log(Anynumber(91, 13, 44, 53, 45));


// OBJECTS IN FUNCTIONS

const MyDetails = {
  name: "Ayush",
  age: 25,
  city: "Bangalore"
}
function handleObject(myObjects){
  console.log(`Username is ${myObjects.name} and user's age is ${myObjects.age}. User lives in ${myObjects.city}`);
}
// handleObject(MyDetails);  // This is METHOD 1

handleObject({
  name: "Hitesh",
  age: 35,
  city: "Hyderabad"
})

//Arrays In Functions

const myArray = [1, 2, 3, 4, 5 ]
function handleArray(getArray)
{
  console.log(getArray[1])
}
handleArray(myArray)