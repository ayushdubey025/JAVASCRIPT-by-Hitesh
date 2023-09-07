//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  /* one() is like parents so two() can give data from one()*/
  const username = "Ayush";
  function two() {
    // one() is global for two()
    const id = "A1";
    console.log(username);
  }
  // console.log(id)    /**/
  two();
}
// one()

if (true) {
  const username = "Ayush";
  if (username === "Ayush") {
    const website = " Audi";
    // console.log(username + website);
  }
  //console.log(website); // This is scope so it can't return value which is out of the if statement brackets
}
// console.log(username);  // This is also out of scope


addOne(5);
function addOne(num) {
  // This is basic function
  return num + 1;
}
// addOne(5);



// addTwo(5);   // Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  // This is also a function but sometimes we say it Expression
  return num + 2;
};
// addTwo(5);