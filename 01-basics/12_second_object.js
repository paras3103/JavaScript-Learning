// const appUser1 = new Object(); 
// console.log(appUser1);

const appUser = {}

appUser.name = "Paras Visaveliya";
appUser.age = 25;
appUser.email = "test@gmail.com";
// console.log(appUser);

const appUser2 = {
    name: "Paras Visaveliya",
    age: 25,
    email: "new@gmail.com",
    sayHello: function() {
        console.log("Hello I am " + this.name);
    }
}
// console.log(appUser2.sayHello());


const regaluarUser = {
    name: "John Doe",
    fulename: {
        username: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}
// console.log(regaluarUser.fulename.username.firstName);
// console.log(Object.keys(regaluarUser.fulename.username));
// console.log(Object.values(regaluarUser));
console.log(Object.entries(appUser2));


const obj1 = {
    1: "one",
    2: "two",
    3: "three"
}
const obj2 = {
    4: "one",
    5: "two",
    6: "three"
}
const obj3 = {
    7: "one",
    8: "two",
    9: "three"
}
console.log(obj1[1]);

console.log(obj1, obj2, obj3);
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

const obj5 = {...obj1, ...obj3};
console.log(obj5);

// console.log(Object.keys(obj5));
// console.log(Object.values(obj5));
// console.log(Object.entries(obj5));


// boolean value checking for object properties

// console.log(appUser.hasOwnProperty("name"));
// console.log(appUser.hasOwnProperty("email"));
// console.log(appUser.hasOwnProperty("age"));