const  JsUsertest = "Paras Visaveliya";
console.log(JsUsertest);

const mysymbol = Symbol("This is a symbol");

const JsUser = {
    name: "Paras Visaveliya",
    "full name": "Paras Visaveliya",
    [mysymbol]: "This is a symbol value",
    age: 25,
    email: "parasvisaveliya@example.com",
    isLoggedIn: true
}

console.log(JsUser.name); //old way to access object properties
console.log(JsUser["email"]); //new way to access object properties
console.log(JsUser["full name"]); // JsUser.full name; // This will throw an error because of the space in the property name
console.log(JsUser[mysymbol]) // This will print the symbol value, but it won't be accessible using dot notation because symbols are not enumerable properties of objects.
console.log(mysymbol);


JsUser.email = "newtest@example.com";
// Object.freeze(JsUser); 
JsUser.email = "hello Paras";
console.log(JsUser.email); // This will still print "newtest@example.com" because the object is frozen and no changes are allowed.


JsUser.greeting = function() {
    console.log("Hello I am");
}
console.log(JsUser["greeting"]); // This will print the function definition, but it won't be accessible using dot notation because the object is frozen and no changes are allowed.    
JsUser.greeting(); // This will call the greeting function and print "Hello I am"

JsUser.greeting2 = function() {
    console.log(`hello am ${this.name}`);
}
console.log(JsUser.greeting2); // This will print the function definition, but it won't be accessible using dot notation because the object is frozen and no changes are allowed.
JsUser.greeting2(); // This will call the greeting2 function and print "hello am Paras Visaveliya"