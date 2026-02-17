const madhaMini = [];

if (madhaMini) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

// const madhaMini1 = "Hello World"

// truthy value
// "0", " ", "false" [], {}, function() {}, true,  1, -1, Infinity, -Infinity

// falsy value
// "", 0, -0, 0n, null, undefined, NaN, false

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) { // Object.keys() returns an array of the object's own enumerable property names. If the length of the array is 0, it means the object is empty.
    console.log('Empty Object');
} else {
    console.log('Non-empty Object');
}

// Nullish Coleascing Oprater (??): Null Undefined
let val1;
name = "Paras" ?? 10
name1 = null ?? "Default Name"
name2 = undefined ?? "Default Name"


console.log(val1 ?? "default value"); // if val1 is null or undefined, it will return "default value". If val1 has any other value, it will return that value.
console.log(name ?? "default name"); // if name is null or undefined, it will return "default name". If name has any other value, it will return that value.
console.log(name1 ?? "default name"); // if name1 is null or undefined, it will return "default name". If name1 has any other value, it will return that value.


// Ternary Operator: condition ? expressionIfTrue : expressionIfFalse


//const age = 18;
//const isAdult = age <= 17 ? "You are an adult" : "You are a minor"; // if age is greater than or equal to 18, isAdult will be "You are an adult". If age is less than 18, isAdult will be "You are a minor".
//console.log(isAdult);


const walet = 100;

const isCityValid = walet <= 50 ? (console.log("Wallet is valid")) : console.log("Less than 50"); // if walet is greater than 50, it will log "true value". If walet is less than or equal to 50, it will log "false value".