const programming = ["js", "cpp", "rb", "swift"]

// programming.forEach( function (val) {
//     console.log(val)
// })

// arrow Function ma pan lakhi skay 
programming.forEach( (val) => {
    // console.log(val)
} )


// Normal Function 
function printMe(item) {
    console.log(item)
}
// programming.forEach(printMe)


// programming.forEach( (item , index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Html",
        languageFileName : "html"
    },
    {
        languageName : "CSS",
        languageFileName : "css"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})