const puzzleElement = document.querySelector("#puzzle")
const guessesElement = document.querySelector("#guesses")
let game1 

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", () => {
    startGame()
})

startGame()


// getPuzzle("2").then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })


