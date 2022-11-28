//////////////////activity 2
let evenNumbers = []

// for (let i = 0; i <= 20; i ++) {
//     if (i % 2 == 0) {
//         (evenNumbers.push(i))
//     }
// }
// to do it backwards it is this way
// for (let i = 20; i >= 0; i --) {
//     if (i % 2 == 0) {
//         (evenNumbers.push(i))
//     }
// }
// console.log(`even numbers between 0 and 20 are ${evenNumbers}`)

/////////////////////////// activity 2
// let oddNumbers = []

// for (let i = 0; i < 30; i++) {
//     if (i % 2 != 0) {
//         (oddNumbers.push(i))
//     }
// }
// console.log(oddNumbers)

////////////////////////////// activity 3

// let age = 17

// while (age < 18) {
//     console.log(`you're too young, you're only ${age}`)
//     age++
// }
// console.log(`you're an adult, nice ${age}`)

// function getAge(whatAge) {
//     return (whatAge? "too young" : "old enough")
// }
// console.log(getAge(true))


// ////////////////////////// activity 4

// Math.random() // generate a number between 1 & 0

// generates a random number between min and max but doesnt seem to work though.

// this generates a random number between 1 and 6
// const random = (min, max) => Math.floor(Math.random() * (max - min)) + min; 
// console.log(random(0, 100))
// // can do like this too
// Math.random() * (max - min) + min
// // or just with a max limit
// Math.random() * max
// Math.floor - rounds up and down to an integer

// generating more than 1 random number - need a loop

// const genrdmnum = (min, max, times) => {
//     const randoms = []

//     for (let i=0; i < times; i++) {
//         randoms.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return randoms
// }

// console.log(genrdmnum(0, 6, 10))


//////////////////////////////// ACTIVITY 5
// let films = ["film 1", "film 2", "film 3", "film 4",]
// for (let i = 0; i < films.length; i++) {
//     if (films[2] = "film 3") {
//         console.log("yay its film 3")
//     } else {
//         console.log ("wrong film")
//     }
// }

///////////////////////////////// activity 6

const rdmnum = (min, max, times) => {
    const randoms = []

    for (let i = 0; i < times; i++) {
        randoms.push(Math.floor(Math.random() * (max - min) + min))
    }
    return randoms
}
console.log(rdmnum(1, 30, 6))

if (randoms[1] % 7 == 0) {
    console.log("divisble by 7")
} else {
    console.log ("not divisible")
}

///////////////////////////////////// activity 7

bobfollow = ["hannah", "jenny", "jill", "muhammad"]
hannahfollow = ["jack", "jelly", "jill", "hannah"]

for (let i = 0; i < 1; i++) {
    console.log (hannahfollow)
    while (hannahfollow = bobfollow)
}
























////////////////////////////////////////////

// let favFilms = [
//     "scooby doo 1",
//     "scooby doo 2 - 'Haunted Island'",
//     "scooby doo 3 (TBA)",
//     "avatar",
//     "avatar 2",
//     "avatar 3",
// ]
// for (let i = 4; i < favFilms.length; i++){
//     console.log(favFilms[i])
// }

// for (counter; iterative condition; incrementation){
    //stuff
//}

// for (let i = 0; i < 100; i+=2){
//     console.log(i += 2)
//  }

 // starts at 0, adds 2 '+=2', 1 + 2 = 3, adds up until where you have defined in 'i < 100/var'

// let lives = 3
// while (lives > 0) {
//     console.log ("Well done you're not dead")
//     lives = 1
// }
// console.log ("Game over")

//Math.floor() // round down
//Math.ceil() - - // round down
// Math.random () - generate a random number between 0 and 1 but never 0 and 1.

// let currentDiceRoll

// while (currentDiceRoll !=1) {
//     console.log (currentDiceRoll)
//     currentDiceRoll = Math.floor(Math.random()*6)+1
// }
// console.log (currentDiceRoll)

// let random

// for ( let i = 0; i < length; i++) {
//     console.log (random)
// }

// let film = [
//     "hello 1",
//     "hello 2",
//     "hello 3", 
//     "hello 4"
// ]
// for (let i = 0; i < film.length; i++) {
//     if (i = [3]) {
//         console.log("yay we got the right one")
//     }
//     else if (i != [3]) {
//         console.log("wrong one")
//     }
// }

// const greeting = () => {
//     return `Hello Code Nation, i like ${drink} and ${food}`
// }
// console.log(greeting("juice", "chocolate"))

// for (let i =0; i < 5; i++){
//     console.log(greeting())
// }