# Word-Guess-with-Constructors
This is a Word Guess command-line (CLI) game using constructor functions.

## Word Guess Game: Super Mario!

### What is it?
A word guessing command-line (CLI) game created using two constructor functions. A constructor method is a special method for creating and initializing an object created within a class.

#### System Requirements

Must have access to computer console, and NodeJS.  

**Operating Instructions:**

1. This command line application is a word guessing game created using two constructor functions. The first constructor is contained in letter.js can be used to create letter objects which store a letter and the status of its guess. It has one method which can either display or hide the letter it contains depending on the status of the guess as well as a method which can be used to update said status.

2. The second constructor function in word.js creates an array of objects using the letter constructor. It also contains methods which call a user's guess on each letter and display the entire word, with only correctly guessed letters unobstructed. 

3. The index.js file then contains the logic of the game as well as the initial conditions and the word bank.

4. To run the game:
     1. start the index.js file in Node.js after installing the only dependency, inquirer. 
     2. A word will be randomly chosen from the word bank.
     3. User will be given 15 guesses to complete the game. 
     4. Each guess should consist of one letter and it will reveal all instances of that letter in the word. 
     5. Try to reveal the entire word before your guesses run out!

The game uses an Super Marioa-themed word bank and 15 guesses by default. However, if you would like to play using your own word bank or a custom number of guesses, simply add your own array of word strings into the wordBank variable or your own number of guesses into the remainingGuesses variable.

Links to screenshots:
-   [Start Game](https://github.com/slsmi285/Word-Guess-with-Constructors/blob/master/images/game_start.PNG)
<br>

-   [Word Win](https://github.com/slsmi285/Word-Guess-with-Constructors/blob/master/images/Word_Win.PNG)

<br>

-   [Wrong Letter Guess](https://github.com/slsmi285/Word-Guess-with-Constructors/blob/master/images/wrong_letter_guess.PNG)

<br>

-   [Out of Guesses](https://github.com/slsmi285/Word-Guess-with-Constructors/blob/master/images/Out_of_Guesses.PNG)
