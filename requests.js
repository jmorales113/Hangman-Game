const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("Unable to fetch puzzle")
        }
    }).then((response) => {
        return response.puzzle
    })
}

const getCountryName = (countryCode) => {
    return fetch("http://restcountries.eu/rest/v2/").then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("An error has taken place")
        }
    }).then((response) => {
        return response.find((country) => country.alpha2Code === countryCode)
    })
}