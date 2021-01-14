const readline = require('readline-sync')
const word = ['g', 'i', 'r', 'a', 'f', 'f', 'e']
let guessed = 'g'
let guessedLetters = []
let guesses = 6
let voititko = 0

// function letterCheck(word, guessed, correctWord) {
//     for (let x = 0; x < word.length; x++) {
//         if (guessed === word[x]) {
//             correctWord.push(guessed)
//             console.log(correctWord)
//         }
//     }
// }

// letterCheck(word, guessed, correctWord)

function kirjainTaiAlaviiva(kirjain, arvattuKirjain) {
    if (kirjain === arvattuKirjain) {
        return kirjain
    } else {
        return '_'
    }
}

// käydään arvatut kirjaimet läpi ja verrataan niitä arvattavan sanan kirjaimiin
// esim. jos sana on 'jee' ja arvatut kirjaimet 'joo', niin palautetaan 'j _ _'
function kirjainCheck (sana, arvatutKirjaimet) {
    let tulos = []
    for (let i = 0; i < sana.length; i++) {
        tulos.push(kirjainTaiAlaviiva(sana[i], arvatutKirjaimet[i]))
    }
    return tulos
}

// console.log(kirjainCheck(['j', 'e', 'e'], ['j', 'o']))

// tarkistetaan vastaako arvattu sana arvattavaa sanaa
function wordCheck(sana, arvatutKirjaimet) {
    voititko = 0
    for (let y = 0; y < arvatutKirjaimet.length; y++) {
        for (let x = 0; x < sana.length; x++) {
            if (sana[x] === arvatutKirjaimet[y]) {
                // console.log("Kirjain löytyi!")
                voititko++
            }
        }
    }

    if (voititko === sana.length) {
        // console.log("Sana arvattu!")
        // console.log("Oikea sana on: ", sana)
        return true
    } else {
        return false
    }
}

// console.log(wordCheck(['j', 'e', 'e'], ['j', 'o', 'e']))

while (guessedLetters.length < 10) {
    let arvaaKirjain = readline.question("Arvaa kirjain ");
    console.log("Arvasit kirjaimen: ", arvaaKirjain);
    guessedLetters.push(arvaaKirjain)
    console.log(guessedLetters)
    console.log(voititko)
    wordCheck(word, guessedLetters)
}

    if (correctWord == word) {
        console.log("You won!")
    }

    if (guessed !== word[x]) {
        guesses -= 1;
        console.log("You have", guesses, "guesses left")

        if (guesses == 0) {
            console.log("Game over")
        }
    }