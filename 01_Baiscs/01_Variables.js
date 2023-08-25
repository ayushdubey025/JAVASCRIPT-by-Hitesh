const accountId = 1212
let email = "ayush@gmail.com"
var password = "11111"
cityname = "Delhi"

// accountId = 1

console.log(accountId)

email = "account@abc"
password = "10101"
cityname = "Noida"

let accountstate

// we can use table for print all variables

/* Prefer not to use var 
 because of issue in block scope and functional scope */

console.table([accountId,email,password,cityname,accountstate])

