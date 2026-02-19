const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Html",
        languageFileName: "html"
    },
    {
        languageName: "CSS",
        languageFileName: "css"
    }
]

// myCoding.filter((value) => {
//     console.log(value)
//     return value
// })

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newValue = myNum.filter((num) => {
    // console.log(num)
    return num > 4
})

console.log(newValue)

myNum.forEach((newvalue) => {
    if (newvalue > 8) {
        console.log(`Here Is value ${newValue}`)
    }
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//   console.log(books)

// const bookData = books.filter((num) => {
//     return num
// })

// data accise 

// let bookData = books.filter((short) => short.title === 'Book Five')

bookData = books.filter( (short) => {
    // console.log(short)
    return short.publish >= 1989 && short.genre === "Non-Fiction"
} ) 
console.log(bookData);