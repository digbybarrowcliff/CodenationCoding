// const holiday = (country, month, time) => {
//     console.log (`yay lets go to ${country} in ${month} and need to go at ${time}`)
// }

// holiday("trafford centre", "easter", "every sunday")

// const saying = () => {
//     console.log ("how are you")
// }
// saying ()

// const hello = (name, drink) => {
//     console.log (`hhi ${name}, come in, would you like ${drink}`)
// }
// hello ("digby", "orange")

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(2*5)

// const replenishStock = (productCode) => {
//     console.log(`Order product ${productCode}, stock is low`)
// }

// const reducePrice = (productCode, originalPrice) => {
//     let salePrice = originalPrice /= 2
//     console.log (`Product number ${productCode} is now £${salePrice}`)
// }

// const checkStock = (productCode, quantity, originalPrice) => {
//     if (quantity <= 10) {
//         replenishStock(productCode)
//     }
//     else if (quantity > 100) {
//         reducePrice (productCode, originalPrice)
//     }
//     else {
//         console.log ("Dont Order stock")
//     }
// }
// checkStock (345678,13, 100)

// 3 TYPES OF FUNCTIONS WE USE ARROW NOW AS ITS MORE MODERN AND FLEXIBLE

// const addMe = (num1, num2) => {
//     return num1 + num2
// }
// addMe (4,5)
 // ARROW FUNCTION - modern way because they have flexibility and anonymity

// function addMe (num1, num2) {
//     return num1 + num2
// }
// addMe (4, 5)
// DECLARATION

// const addMe = function (num1, num2) {
//     return num1 + num2
// }
// addMe (4, 5)
// anonymous/expression function

// /////////////////////////////THESE ARE HIGHER ORDER FUNCTIONS /////////////////////////////////

// console.log(example3.toString());
// // code not working^^

// const add = () => {
//     return 2 + 3;
// }

// add (); //logs 5

// add; //logs the whole function

// const add = (num1) => {
//     return (num2) => {
//         return num1 + num2;
//     }
// }

// // console.log(add(2));  need something else to return it as it says function anonymous so we need ... line below

// console.log(add(2)(5)) 

// activity 1 HOF
// const greeting = () => {
//     return `Hello Code Nation`
// }
// for (let i =0; i < 2; i++){
//     console.log(greeting())
// }
// activity 2 HOF
// let array1 = [1, 5, 19, 4, 22]
// const map1 = array1.map(x => x * 3)

// console.log(map1)

let array2 = (1, 5, 25, 8, 1020)
console.log(Math.min(array2))
console.log(Math.min(1, 5, 823, 56, 12))