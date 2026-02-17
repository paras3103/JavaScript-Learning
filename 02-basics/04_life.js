// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    // named IIFE
    console.log(`Hello User You are Connected`)
})();
// chai()

( (Hello) => {
    // Unamed IIFE
    console.log(`${Hello} User You Are Login`);
} ) ('YES')
