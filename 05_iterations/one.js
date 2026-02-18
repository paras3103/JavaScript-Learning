// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop Value: ${i}`)

//     for (let j = 0; i <= 10; j++) {
//         console.log(`Outer Loop Value: ${i} and Inner Loop Value: ${j}`)
//     }
// }


for (let i = 1; i <= 10; i++) {
    // console.log(`Main : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner ${j} and Inner main ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }

}

let myArray = ["apple", "Orange", "banna"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)

}

for (let index = 0; index <= 20; index++) {
    // console.log(`Your Page Number Is : ${index}`)
    if (index == 5) {
        // console.log(`Hello You Seen ${index} Number Of Page`);
        break
    }
    
 }
for (let index = 1; index <= 20; index++) {
    // console.log(`Your Page Number Is : ${index}`)
    if (index == 6) {
        // console.log(`To Bee...`);
        continue
    }
    // console.log(`loop is Running ${index}`)
}
