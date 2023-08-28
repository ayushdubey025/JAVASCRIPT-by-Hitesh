const name = "Ayush";
const age = 22;

//console.log(name + age) // But this is not good practice

console.log(`My name is ${name} and I am ${age} years old`);

const gameName = new String("AyushGun08");
console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("Gun"));
console.log(gameName.substring(0, 4));
console.log(gameName.substring(4, 8));
console.log(gameName.slice(-8, 4)); // slice(-8, 4) we could give -ve values here
console.log(gameName.__proto__);

const newName = "   Dubey      ";
console.log(newName);

console.log(newName.trim()); // Trim removes leading and trailing white spaces
console.log(newName.trimLeft());
console.log(newName.trimRight());
console.log(newName.trimStart());
console.log(newName.trimEnd());

console.log(newName.replace("Dubey", "Ayush")); // replace Dubey with Ayush
console.log(newName.replace(/Dubey/, "Ayush"));

const url = "http://wwww.ayushgun08.com";

console.log(url.startsWith("http"));
console.log(url.includes("ayush"));
console.log(gameName.split("-"));