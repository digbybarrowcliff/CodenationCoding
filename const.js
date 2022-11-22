// const person = {
//     firstName: "sally",
//     lastName: "evans",
//     age: "389",
//     occupation: "lonely",
//     homeOwner: false,
// }
// person.homeOwner = true
// console.log(person)
// firstName = "digby"
// // log as OBJECT.PROPERTY E.G. PERSON.FIRSTNAME ...THEREFORE...
// console.log (person.occupation) // can also use bracket notation (next line)
// console.log (person["age"], person ["lastName"]) // this allows you to be dynamic
// let day = "sunday"
// const pet = {
//     petName: "lizard",
//     typeOfPet: "lizard",
//     age: 3,
//     colour: "brown",
//     hobbies: ["skiing", "listening to early french revolutionary songs"],
//     petFeatures: ["arrogant", "grating", "manipulative"]
// }
// if (day === "monday") {
//     console.log (`Great, ${pet.petName} is being ${pet.petFeatures[2]}`)
// }
// else {
//     console.log (`oh no, ${pet.petName} is being ${pet.petFeatures[0]}`)
// }
// pet.colour = "yellow"
// console.log (`my pet is called ${pet.petName},it is ${pet.age} days old and i am not so fond of it because it is ${pet.colour} but mostly i dont like him because he is ${pet.petFeatures[1]} and ${pet.petFeatures[2]}`)


// const pet = {
//     petName: "lizard",
//     typeOfPet: "lizard",
//     age: 3,
//     colour: "brown",
//     hobbies: ["skiing", "listening to early french revolutionary songs"],
//     petFeatures: ["arrogant", "grating", "manipulative"],
//     food: "biscuits",
//     drink: "carver",
//     petHome () {
//         if (this.age >= 3 && this.food == "biscuits") {
//             return `lizard is eating ${[pet.food]}`
//         }
//         else if (this.age <=2 && this.colour == "yellow") {
//             return "lizard needs to stay"
//         }
//         else {
//             return "what are we going to do"
//         }
//     }    
// }
// console.log (pet.petHome())

const shop = {
    server: "hello1",
    drinks: "tea",
    food: "sandwich",
    price: 22,
    order () {
        if (this.server === "hello1" && this.food === "sandwich") {
            return "your total is this"
        }
        else {
            return "cancelled"
        }

    }
}
console.log (shop.order())