// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log("An error has taken place")
    }
})

request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3")
request.send()

const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener("readystatechange", (e) => {
    const countryCode = "US"
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        data.find((country) => {
            if (country.alpha2Code === countryCode) {
                console.log(country.name)
            }
        })
    } else if (e.target.readyState === 4) {
        console.log("An error has taken place")
    }
})
countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
countryRequest.send()
