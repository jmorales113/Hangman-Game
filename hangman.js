const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
} 

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""

    this.word.forEach(letter => {
        puzzle = this.guessedLetters.includes(letter) || letter === " " ? puzzle += letter : puzzle += "*"
    });

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()

    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
    }
    if (!this.word.includes(guess)) {
        this.remainingGuesses--
    }
}

const puzzleElement = document.querySelector("#puzzle")
const guessesElement = document.querySelector("#guesses")
const game1 = new Hangman("cat", 2)

puzzleElement.textContent = game1.getPuzzle()
guessesElement.textContent = game1.remainingGuesses

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener("keypress", function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.getPuzzle()
    guessesElement.textContent = game1.remainingGuesses
})

