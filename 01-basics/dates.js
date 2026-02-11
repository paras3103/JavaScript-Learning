let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(myDate.toDateString());

let myDate2 = new Date(2024, 5, 20);
console.log(myDate2.toString());
console.log(myDate2.getFullYear());
console.log(myDate2.getMonth());
console.log(myDate2.getDate());


let timeStamp = Date.now("2024-06-20");
// console.log(timeStamp);
console.log(timeStamp.toString());


// let MytimeStap = new Date.now();
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));