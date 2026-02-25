// Iterations Object Method

const myObject = {
    js :'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Iterations Array Method

const programming = ["js", "cpp", "rb", "swift"]

for (const key in programming) {
    console.log(programming[key]);
}

// map ke upeer iterations kam na kre

const map = new Map()
map.set('In', "India")
map.set('Usa', "United States Of USA")
map.set('Fr', "France")
map.set('In', "India")

for (const key in map) {
   console.log(map[key])
}






let arr = [5, 20, 8, 50, 10, 100];

let max = arr.reduce((acc, curr) => {
    console.log(`acc vali ${acc} and curr ${curr}`)
  return curr > acc ? curr : acc;
}, [0]);

console.log(max)