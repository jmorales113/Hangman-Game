const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
} 

Hangman.prototype.calculateStatus = function () {

    if (this.remainingGuesses === 0) {
        this.status = "failed"
    }

    this.word.forEach(letter => {
        if (this.guessedLetters.includes(letter) && this.guessedLetters === 3) {
            this.status = "finished"

        }
    })
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
    this.calculateStatus()
}

