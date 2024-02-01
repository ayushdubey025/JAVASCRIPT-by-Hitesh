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

// heroPower.heyAyush();  

