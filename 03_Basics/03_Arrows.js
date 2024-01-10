const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this); // 'this' talks about context
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);  //  {}

//TODO: IMPORTANT : In browser Global object  is Window object

// function chai(){
//     console.log(this);
// }
// chai()

// *** Arrow function  *** //

const chai = () => {
  let username = "Ayush";
  console.log(this.username);
};
// chai()

// const addTwo = (num1,num2) =>
// {
//     return num1 + num2;
// }

// console.log(addTwo(2,4))  // => 6



//Implicite return - no need curly braces and return function

// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(5,7))


// We can use 'Paranthisis' instead of curly braces and return

// const addTwo = (num1,num2) =>
//  (num1 + num2);
// console.log(addTwo(3,5))  // ==>> 8


// const addTwo = (num1, num2) => {username: "Shiv";}; // if we use curly braces the it prints undefind
// console.log(addTwo());  // => Undefined

const addone = (num1, num2) => ({username: "Shiv"}); // we must use small brackets over curly braces
console.log(addone());   // => { username: 'Shiv' }