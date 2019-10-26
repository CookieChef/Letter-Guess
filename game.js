const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let win=0;
let lose=0;
let userGuesses=[];
let guesses=10;

document.onkeydown = () => {
    guesses --;
    let letter = event.key.toLowerCase();
    userGuesses.push(letter);
    guessesLeft();
    updateUserGuesses();

        if(letter === computerGuess) {
            win ++;
            document.querySelector("#wins").innerHTML = "Wins! " + win;
            reset();
        }
        if (guesses === 0) {
            lose++;
            document.querySelector("#losses").innerHTML = "Losses! " + lose;
            reset();
        }

    }

reset = () => {
    guesses=10;
    userGuesses=[];
    computerChoice();
    guessesLeft();
    updateUserGuesses();
}

quit = () => {
    guesses=10;
    userGuesses=[];
    win=0;
    lose=0;
    document.querySelector("#wins").innerHTML = "Wins! " + win;
    document.querySelector("#losses").innerHTML = "Losses! " + lose;
}

const guessesLeft = () => {
    document.querySelector("#guessesLeft").innerHTML = "You have " + guesses + " guesses left!";
}

const computerChoice = () => {
     computerGuess =  computerChoices[Math.floor(Math.random()*computerChoices.length)]; {
            console.log(computerGuess);
        }
    }

const updateUserGuesses = () => {
    document.querySelector("#userGuesses").innerHTML = "You have already guessed: " + userGuesses.join(", ");
}



