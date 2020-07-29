const puzzleElement = document.querySelector("#puzzle")
const guessesElement = document.querySelector("#guesses")
const game1 = new Hangman("car parts", 2)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMessage

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})

getPuzzle("2").then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getCountryName("NI").then((response) => {
    console.log(`Country name: ${response.name}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})


