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

const result = Addnum(4,2);

// console.log(result);

function UserNameMessage(username){
    if (!username) //(username === undefined)
    {
        console.log("Please enter your name");
        return;
    }
    return `${username} logged in!`
}
const name = UserNameMessage();
console.log(name)