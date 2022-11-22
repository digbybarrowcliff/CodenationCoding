let totalCost;
const coffeeShop = {
    branch: ["manchester", "Oldham"],
    drink: [["coffee", 5], ["tea", 3], ["coke", 1]],
    food: [["sandwich", 10], ["crisps", 9], ["apple", 0.5]],
    // drinksList: ["coffee", "tea", "coke"],
    // drinkPrices: [3, 2, 1],
    // foodList: ["sandwich", "crisps", "apple"],
    // foodPrices: [5, 1, 0.5],
    foodOrder(f) {
    console.log(`You ordered ${this.food[0][0]}. The price is ${this.food[0][1]} + ${this.food[1][1]} + ${this.food[2][1]}`)
    },
    drinkOrder(d) {
    console.log(`You ordered ${this.drink[0]} and your price will be ${this.drink[0]}`)
    }
}
console.log(coffeeShop.foodOrder())



