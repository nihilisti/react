console.log("------------------------------------------------")
console.log("Tehtävät 2.1, 2.2 & 2.3")

// luodaan lista työpäivistä
let days = ["ma", "ti", "ke", "to", "pe"]

// luodaan lista tunneista
let hours = [7, 6, 5, 7, 6]

// luodaan muuttuja joka saa arvon nolla
let sum = 0

// for loopissa käydään läpi listan alkiot ja lasketaan niiden määrä
// tallennetaan summaan tuntien määrä
for (i = 0; hours.length > i; i++) {
    sum += hours[i]
}

// lasketaan keskiarvo
// jaetaan summa tuntien määrällä
let avg = sum / hours.length

// tulostetaan keskiarvo
console.log("keskiarvo:", avg)

// luodaan minimille ja maksimille muuttujat
// muuttujiin laitetaan lähtöarvot joita verrataan listan lukuihin
let min = 12
let max = 0

// for loopissa käydään läpi listan alkiot ja selvitetään niiden minimi ja maksimi
for (i = 0; hours.length > i; i++) {
    if (hours[i] < min) {
        min = hours[i]
    }
    if (hours[i] > max) {
        max = hours[i]
    }
}

// tulostetaan minimi
console.log("minimi:", min)

// tulostetaan maksimi
console.log("maksimi:", max)
console.log("------------------------------------------------")

console.log("Tehtävä 2.4")

let palkkatulot = [{ kk: "tammi", palkka: 1520 },
{ kk: "helmi", palkka: 1550 },
{ kk: "maalis", palkka: 1600 },
{ kk: "huhti", palkka: 1740 },
{ kk: "touku", palkka: 1840 },
{ kk: "kesä", palkka: 1810 },
{ kk: "heinä", palkka: 1780 },
{ kk: "elo", palkka: 1920 },
{ kk: "syys", palkka: 1970 },
{ kk: "loka", palkka: 2150 },
{ kk: "marras", palkka: 1996 },
{ kk: "joulu", palkka: 2200 },]

let korotetut = new Array();

let korotusprosentti = 50

palkkatulot.forEach(function (item) {
    var korotus = (korotusprosentti / 100) * item.palkka
    var korotettuPalkka = item.palkka + korotus
    console.log(korotettuPalkka);
})

console.log("------------------------------------------------")

console.log("Tehtävä 2.5")

let veroprosentti = 19

palkkatulot.forEach(function (item) {
    var verot = (veroprosentti / 100) * item.palkka
    var verollinen = item.palkka - verot
    console.log(verollinen);
})

console.log("------------------------------------------------")

console.log("Tehtävä 2.6")

// luodaan lista numeroista ja järjestetään listan sisältö sort-funktiolla
let numbers = [1, 4, 100, 2, 5, 4]

function compare(a, b) {
    if (a > b) {
        return 1;
    } if (b > a) {
        return -1;
    }
}

numbers.sort(compare)
console.log("numerot:", numbers)
console.log("------------------------------------------------")

console.log("Tehtävä 2.7")

let numbers2 = ["1", "4", "100", "2", "5", "4"]

function compare2(a, b) {
    if (a > b) {
        return 1
    } if (b > a) {
        return -1
    }
}

numbers2.sort(compare2);
console.log("numerot 2:", numbers2)
console.log("------------------------------------------------")

console.log("Tehtävä 2.8")

console.log("Sort-funktio uudelleenjärjestää listan alkiot. Parametrina annettava compare-funktio on vertailufunktio, jossa määritellään järjestyksen määräävä ehto.")
console.log("------------------------------------------------")

console.log("Tehtävä 2.9")

let paivat = [{ "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22 }]

function compare3(a, b) {
    if (a > b) {
        return 1
    } if (b > a) {
        return -1
    }
}

paivat.forEach(function (m) {
    Object.values(m).sort(compare3)
    console.log(Object.values(m))
});

paivat.sort(compare3)
console.log(paivat)