const myNumber = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNumber = myNumber.map((num) => {
//   return num + 10;
// });

const newNumber = myNumber
                .map((num) => num * 20 )
                .map( (num) => num + 11)
                .filter( (num) => num >= 40)
                .map( (num) => Math.floor(num/3))

console.log(newNumber); 