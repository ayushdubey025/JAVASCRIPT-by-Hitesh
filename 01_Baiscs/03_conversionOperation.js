let score = "ayush";

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score);
//console.log(typeof valueInNumber)
//console.log(valueInNumber)   return => NaN

// "24" => 24
// "24a" => NaN
// true => 1; false => 0

let isLoggedIn = "ayush";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// 1=> true; 0=> false
// "" => false
// "ayush" => true

let someNumber = 66;

let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// *****************************  Operations  ****************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  return => 8 (2 to the power of 3)
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Ayush";

let str3 = str1 + str2;
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  => 122 it starts from left to right but 1st value is string so it doesn't add 1 and then 2 and 2.

// console.log(1 + 2 + "2");  => 32 it adds 1 and 2 from left to right and 2 is string

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
gameCounter++;
//console.log(gameCounter);

// link to study
//  https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
