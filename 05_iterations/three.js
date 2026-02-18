const arr = [1, 2, 3]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World"
for (const gret of greetings) {
    // console.log(`each char is ${gret}`);
}


const map = new Map()
map.set('In', "India")
map.set('Usa', "United States Of USA")
map.set('Fr', "France")
map.set('In', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value)
}

const  myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}

// for (const obj of myObject) {
//     console.log(obj)
// }