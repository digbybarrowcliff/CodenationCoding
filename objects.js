//////////////////// ACTIVITIES
const pet = {
    petName: "digby", 
    typeOfPet: "dog",
    age: 20,
    colour: "red",
    petFeatures: ["annyoying", "angry", "arrogant"],
    eatdrink () {
        if (this.age == 20 && this.petName == "digby"){
            return `${this.petName} is drinking tequila`
        }
        else {
            return "nothing"
        }
    }
}
console.log(pet.eatdrink())
// console.log(`my ${pet.typeOfPet} is ${pet.age} years old and is called ${pet.petName}`)


//////////////////////////////////////////////
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

///////////////////////////////////////ACTIVITY 5

let totalCost;
const coffeeShop = {
    branch: ["manchester", "Oldham"],
    drink: [["coffee", 5], ["tea", 3], ["coke", 1]],
    food: [["sandwich", 10], ["crisps", 9], ["apple", 0.5]],
    // drinksList: ["coffee", "tea", "coke"],
    // drinkPrices: [3, 2, 1],
    // foodList: ["sandwich", "crisps", "apple"],
    // foodPrices: [5, 1, 0.5],
    foodOrder(f, n1) {
    return `You ordered ${this.food[f][n1]}. The price is £${this.food[f][n1]}`
    }, 
    drinkOrder(d, n2) {
    return `You ordered ${this.drink[d][n2]} and your price will be £${this.drink[d][n2]}`
    },
    totalOrder(f, d, n1, n2) {
        return `total cost is £${this.food[f][n1] + this.drink[d][n2]}`
    },
}
console.log(coffeeShop.foodOrder(0, 1))
console.log(coffeeShop.drinkOrder(0, 1))
console.log(coffeeShop.totalOrder(1, 1, 1, 1))



