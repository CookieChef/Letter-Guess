//Array that contains all the options that can be guessed: in this case the alphabet

const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variable declarations
let win=0;
let lose=0;
let userGuesses=[];
let guesses=10;

//this is what happens when the user clicks the "startBtn" and the actions that take place 
reset = () => {
    document.querySelector("#guessesLeft").innerHTML = "You have " + guesses + " guesses left!";
    document.querySelector("#wins").innerHTML = "Wins! " + win;
    document.querySelector("#losses").innerHTML = "Losses! " + lose;
    document.querySelector("#userGuesses").innerHTML = "You have already guessed: " + userGuesses.join(", ");
    document.querySelector("#startingMssg").innerHTM = "Beggin Guessing!!"
    guesses=10;
    userGuesses=[];
    computerChoice();
    guessesLeft();
    updateUserGuesses();
}

//this is what happens when the user clicks the "quitBtn", it also resets the game 
quit = () => {
    guesses=10;
    userGuesses=[];
    win=0;
    lose=0;
    document.querySelector("#wins").innerHTML = "Wins! " + win;
    document.querySelector("#losses").innerHTML = "Losses! " + lose;
}

//updates the guesses the user has left 
const guessesLeft = () => {
    document.querySelector("#guessesLeft").innerHTML = "You have " + guesses + " guesses left!";
}

//sets a variable called the "computerChoice" by randomly selecting an element of the array "computerChoices"
const computerChoice = () => {
     computerGuess =  computerChoices[Math.floor(Math.random()*computerChoices.length)]; {
            console.log("Computer chose: " + computerGuess);
        }
    }

// takes the user guesses and joins them with a ","    
const updateUserGuesses = () => {
    document.querySelector("#userGuesses").innerHTML = "You have already guessed: " + userGuesses.join(", ");
}

//this is the game logic; dictates what happens when the user hits a key 
//also contains the main logic of the game
document.onkeydown = () => {
    guesses --;
    let letter = event.key.toLowerCase();
    userGuesses.push(letter);
    guessesLeft();
    updateUserGuesses();
        //of the user guessed right it updates the win count
        if(letter === computerGuess) {
            win ++;
            document.querySelector("#wins").innerHTML = "Wins! " + win;
            reset();
        }
        //is the user guessed wrong it updates the lose count when the guesses left is equal to 0
        if (guesses === 0) {
            lose++;
            document.querySelector("#losses").innerHTML = "Losses! " + lose;
            reset();
        }

    }
