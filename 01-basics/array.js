
let arry = [1, 2, 3, 4, 5];
console.log(arry);
console.log(typeof arry);

let arry2 = new Array(6, 7, 8, 9, 10);
console.log(arry2);
console.log(typeof arry2);

let arry3 = new Array(5);
console.log(arry3);
console.log(typeof arry3);

let arry4 = Array.of(11, 12, 13, 14, 15);
console.log(arry4);
console.log(typeof arry4);

let arry5 = Array.from(arry);
console.log(arry5);
console.log(typeof arry5);

let arry6 = Array.from("Hello");
console.log(arry6);
console.log(typeof arry6);  

console.log(arry.length);
console.log(arry[0]);
console.log(arry[4]);

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

console.log(myArr[0]);

// myArr.push(1);
// myArr.push(6);
// myArr.unshift(10);
// myArr.shift();
// myArr.pop();
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));


// slice and splice
console.log(myHeors.slice(1, 4));
console.log(myHeors);

myHeors.splice(2, 1, "Aquaman", "Cyborg");
console.log(myHeors);

console.log("A " , myArr);

const myn1 = myArr.slice(1, 3);
console.log("B " , myn1);


const myn2 = myArr.splice(1, 2);
console.log("C " , myn2);