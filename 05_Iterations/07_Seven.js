const myNumber = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNumber = myNumber.map((num) => {
//   return num + 10;
// });

const newNumber = myNumber
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNumber); 