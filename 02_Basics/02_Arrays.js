// array
const marvel = ["Ironman", "Spiderman", "Thor", "Wolverine"];
const dc = ["Superman", "Batman", "Aquaman", "Flash"];

// marvel.push(dc);  // It is not usefull and it  gives arrays in the array
// console.log(marvel);
// console.log(marvel[4]);


// METHOD 1 = 'Concatinate' is better than previous method
// console.log(marvel.concat(dc));


// METHOD 2 = SPREAD THE ARRAYS
// const all = [...marvel,...dc];
// console.log(all);


// ARRAYS IN ARRAYS

const arr = [1, 2, 3, [4,5,6], [7,[8,9]] ];
const Newarr = arr.flat(Infinity)  // It spreads the array in the array format
// console.log(Newarr);


//Logical array

console.log(Array.isArray("Ayush"));
console.log(Array.isArray([1,2,8]));

console.log(Array.from("Ayush Dubey"));
console.log(Array.from({name: "Ayush Dubey"}));  // from which part do you want for array like key or value. [Interesting for INTERVIEWS]



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));