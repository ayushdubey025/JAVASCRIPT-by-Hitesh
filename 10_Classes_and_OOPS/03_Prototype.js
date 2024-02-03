// let myName = "ayush     "
// let mychannel = "dubeyji     "

// console.log(myName.trueLength);

let myHeroes = ['Thor','Ironman','Batman'];

let heroPower = {
    Ironman:"Suit",
    Thor:"Hammer",
    Batman:"Mind",

  getBatmanPower: function(){
        console.log(`Batman has ${this.Batman}`)
    }
}

// heroPower.getBatmanPower()

Object.prototype.ayush = function(){
    console.log('Ayush got Internship at Microsoft');
}



Array.prototype.heyAyush = function(){
    console.log('Hey Ayush');
}


 //  object prototype use in arrays, functions, strings because Object is paraent of them

// myHeroes.ayush();
// heroPower.ayush();


// myHeroes.heyAyush();   //  array prototype use in array but not in objetct because Object is paraent of Array

// heroPower.heyAyush(); ==>> Type Error 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Ayush".trueLength()
"Internship".trueLength()