// array
const myarr = [1, 2, 3, 4, 5, 6]
const myheros = ["Superman", "Ironman", "Batman"]

// console.log(myarr[2])
// console.log(myheros[1])

// Array Methods

myarr.push(8)
//console.log(myarr.length)   // returns => 7

myarr.push(3)
//console.log(myarr)

myarr.pop()
//console.log(myarr)


myarr.unshift(3)    // it takes the first position of the array
//console.log(myarr) 

myarr.shift()  // it removes the first position of the array
//console.log(myarr)


// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1, 3)  // 
console.log("C ", myarr);
console.log(myn2);