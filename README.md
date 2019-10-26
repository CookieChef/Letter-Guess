# Psychic Game!


Start the game by clicking on the 'Lets Begin!' button
This is a basic JavaScript game that lets the user try guess a letter of the alphabet a max of 10 times. If the user does not guess the correct letter within those 10 tries the user gets a loss point. If guess correctly the user gets a win point. 

The user can reset the game by quitting.

## JavaScrip Logic 

    There are two main functions that run the game. One is the "reset" or start game function, the other is the "quit" game function, which resets the game and the values of win and lose to 0. The main functions call on other methods that contain the logic of the game split into different functionalities. 

        Guesses left - updates the html element to display how many guesses the user has left depending the onkeydown event.

        ComputerChoice - selects a random element of the arrays that contains the choices available and makes that the variable the user then has to guess.

        UpdateUserGuesses - updates the html element to display the guesses or "letters" the user has alredy attempted. 

        Onkeydown waits and listens for the user input, which in this case is the pressing of a key. This creates a decrement in the amount of guesses the user has and pushes the letter to an array which is then displayed to the user to let them know which letters they have already pressed. 

            If the user correctly guessed before the count decreases to 0 the win count is updated by one. If not, then the lose count will be updated by 1.
    
## Link to see the app!

[Play the App] (https://cookiechef.github.io/Letter-Guess/.)
[GitHub Repository (https://github.com/CookieChef/Letter-Guess.git)

