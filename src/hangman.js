import { game } from "./index"

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = [" "]
        this.status = "playing"
    }
    calculateStatus() {
        let puzzleChar = game.puzzle
        if (this.remainingGuesses === 0) {
            this.status = "failed"
        } else if (!puzzleChar.includes("*") && this.remainingGuesses > 0 || this.remainingGuesses <= 0) {
            this.status = "finished"
        } 
    }
    get statusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === "failed") {
            return `Nice try! the word was "${this.word.join("")}".`
        } else if (this.status === "finished") {
            return `Good job! You guessed the word!`
        }
    }
    get puzzle() {
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

export { Hangman as default }


