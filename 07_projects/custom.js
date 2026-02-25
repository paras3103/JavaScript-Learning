// const buttons = document.querySelectorAll('.button')
// console.log(buttons)

// const body = document.querySelectorAll("body")


// buttons.forEach(function (button){
//   console.log(button)
//   button.addEventListener('click', function(e) {
//     console.log(e)
//     console.log(e.target)

//     switch(e.target.id) {
//       case "grey":
//       document.body.style.backgroundColor = "grey"
//       console.log("Here Is Grey Color On bg");
//       break;
//       case "white":
//       document.body.style.backgroundColor = "white"
//       console.log("Here Is Grey Color On bg");
//       break;
//       case "yellow":
//       document.body.style.backgroundColor = "yellow"
//       console.log("Here Is Grey Color On bg");
//       break;
//       case "blue":
//       document.body.style.backgroundColor = "blue"
//       console.log("Here Is Grey Color On bg");
//       break;
//     }
//   })
// })

const button = document.querySelectorAll('.button')
console.log(button)

const canvas = document.querySelector('.canvas')

button.forEach(function (e) {

    e.addEventListener('click', function (value) {
        // console.log(value)
        // console.log(e)
        // console.log(e.target)
        if (value.target.id === "grey") {
            canvas.style.backgroundColor = "grey"
            console.log(`Here Is a Grey color`)
        }
        if (value.target.id === "white") {
            canvas.style.backgroundColor = "white"
            console.log(`Here Is a white color`)
        }
        if (value.target.id === "blue") {
            canvas.style.backgroundColor = "blue"
            console.log(`Here Is a blue color`)
        }
        if (value.target.id === "yellow") {
            canvas.style.backgroundColor = "yellow"
            console.log(`Here Is a yellow color`)
        }
    })
})


const time = document.getElementById('clock')

setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    time.innerHTML = date.toLocaleTimeString()
}, 1000)



let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}

