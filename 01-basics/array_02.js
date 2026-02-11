const marvel_heros = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America"];

const dc_heros = ["Batman", "Superman", "Wonder Woman", "Flash", "Green Lantern"];
// Accessing elements in an array
// console.log(marvel_heros[0]);
// console.log(dc_heros[2]);

// Modifying elements in an array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[5][4]);


const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);


// sparde opertor 
const all_heros2 = [...marvel_heros, ...dc_heros];
console.log(all_heros2);

console.log(Array.isArray(dc_heros));
console.log(Array.from("Hello World"));
console.log(Array.from({name: "Hello World"})); //interesting 