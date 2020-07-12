// letter.js
// contains the Letter constructor, used by word.js (Word constructor)
// constructor function for an individual letter
// stores the letter's value and controls whether it is displayed or not
// depending on whether it has been guessed by the user
//'check' function changes boolean so the letter will display if it's guessed
//Letter constructor, 'displayLet" will display an underscore or letter or blank (if the word to be guessed has a space)

function Letter(alpha) {
    this.alpha = alpha;
    this.guessed = false;
    this.displayLet = function() {
        if (this.alpha === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.alpha;
        }
    }
    this.check = function(userGuess) {
        if (userGuess === this.alpha) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;
