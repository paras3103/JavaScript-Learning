const one = 200

if (one < 300) {
    console.log("one is less than 300");
} 

if (one > 50) {
    console.log("one is greater than 50");
}else if (one < 50) {
    console.log("one is less than 50");
} else {
    console.log("one is equal to 50");
}

let second = 200

if (second < 300) {
    console.log("second is less than 300");
} else {
    console.log("seco is greater than or equal to 300");
}

const isTrue = true

if (isTrue) { // if isTrue is true, the code block will execute. If isTrue is false, the code block will not execute.
    console.log("isTrue is true");
} else {
    console.log("isTrue is false");
}


const newTest = "Hello World"

if (newTest == "Hello World") { // double equals checks for value only, it does not check for type. So if newTest was a number, it would still be equal to "Hello World" because they have the same value.
    console.log("newTest is equal to 'Hello World'");
} else {
    console.log("newTest is not equal to 'Hello World'");
}

const newTest1 = "Hello World"

if (newTest1 != "Hello World") { // not equal to operator checks for value only, it does not check for type. So if newTest1 was a number, it would still be not equal to "Hello World" because they have the same value.
    console.log("newTest1 is not equal to 'Hello World'");
} else {
    console.log("newTest1 is equal to 'Hello World'");
}

const third = 200

if (third === 200){ // triple equals checks for value and type
    console.log("third is equal to 200");
} else {
    console.log("third is not equal to 200");
}


const ueserLogin = true
const userLoginEmail = false

if (ueserLogin && userLoginEmail) { // logical AND operator checks if both conditions are true
    console.log("User is logged in and has an email");
}

const userLoginnew = true
const userLoginEmailnew = false

if (userLoginEmailnew || userLoginnew) { // logical OR operator checks if at least one condition is true
    console.log("User is logged in or has an email");
}


// <, >, <=, >=, ==, !=, ===, !==, &&, ||, !, ??, ?: