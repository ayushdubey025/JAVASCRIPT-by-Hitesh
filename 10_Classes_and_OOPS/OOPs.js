// object literal

const user = {
    username:"Ayush",
    email:"ayushdubey0806@gmail.com",
    no:6,

    getUserDetails: function()
    {
        console.log("Get user datails")
        console.log(this);
    }
  
}

// console.log(user.no);
// console.log(user.getUserDetails());


// constructor function  ==>>  use of 'new' keyword for uniqueness

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // we can write 'return this' or not. It doesn't matter
}

const userOne = new User("Ayush", 12, true)
const userTwo = new User("React", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);