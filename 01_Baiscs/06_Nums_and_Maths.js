const num = 100

console.log(num)

const num2 = new Number(240)  // Number is a Object
console.log(num2) 
console.log(num2.toString().indexOf('0'))

console.log(num2.toFixed(3)) // We will use more this. We can use in ecommerce.

const num3 = 124.8962
console.log(num3.toPrecision(3)) // we can use this for more precise value.
console.log(num3.toPrecision(2))
console.log(num3.toExponential(1)) 

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')) // 'en-IN' use for Indian system.

//+++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log(Math.LN2) // ln
console.log(Math.LN10) // ln10
console.log(Math.LOG2E) // log
console.log(Math.abs(-3))
console.log(Math.floor(3.64))
console.log(Math.ceil(7.4))
console.log(Math.round(3.64))
console.log(Math.sqrt(144))
console.log(Math.pow(3,2))
console.log(Math.min(7,43))
console.log(Math.max(7,43))
console.log(Math.random(3))
console.log(Math.sin(0))
console.log(Math.cos(0))
console.log(Math.tan(0))
console.log(Math.asin(1))
console.log(Math.acos(1))
console.log(Math.atan(1))

// Math.random()

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// Important to use Math