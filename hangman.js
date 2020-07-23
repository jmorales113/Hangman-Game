class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "playing"
    }
    calculateStatus() {
        let puzzleChar = game1.getPuzzle()
        if (this.remainingGuesses === 0) {
            this.status = "failed"
        } else if (!puzzleChar.includes("*") && this.remainingGuesses > 0 || this.remainingGuesses <= 0) {
            this.status = "finished"
        } 
    }
    statusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === "failed") {
            return `Nice try! the word was "${this.word.join("")}".`
        } else if (this.status === "finished") {
            return `Great work! You guessed the word!`
        }
    }
    getPuzzle() {
        let puzzle = ""

        this.word.forEach(letter => {
            puzzle = this.guessedLetters.includes(letter) || letter === " " ? puzzle += letter : puzzle += "*"
        });

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()

        if (this.status !== "playing") {
            return
        }

        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
        }

        if (!this.word.includes(guess)) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
}


