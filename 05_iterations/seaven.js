const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newuserone = myNum.map( (num) => { return num + 10 })

 const newNums = myNum.map( (num) => { return num + 20})


console.log(newNums)


const newuser = myNum
.map( (value) =>  value * 3 )
.map( (value) => value + 1 )
.filter( (value) => value <= 15 )

console.log(newuser)