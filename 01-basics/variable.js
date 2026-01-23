const accountId = "123";
let accountName = "Paras";
let accountEmail = "paras@gmail.com";
var accountPassword = "paras@123";
let accountCity = "Gujrat";

let userName = "Ashvini";
let userEmail = "ashvini@gmail.com";
let userPassword = "ashvini@123";
let userCity = "Chaprajpur";

// accountId = 2

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountName, accountEmail, accountPassword, accountCity]);
console.table([userName, userEmail, userPassword, userCity]);
console.log(typeof [accountId, accountName, accountEmail, accountPassword, accountCity]);
console.log(typeof null);