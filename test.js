// console.log("hello world what is your name?".slice(12, -5))

// var firstName ="Digby";
// let age = "25";
// let universityStudent = "who knows";
// let favouriteColour = "green";
// console.log(firstName, age, universityStudent)

// let nameOfPet ="speaker"
// console.log(`I drive a ${nameOfPet}. I hate ${universityStudent}, but i really want ${age}.`)

// console.log(`My name is ${firstName}, I am ${age} years old, and my favourite colour is ${favouriteColour}.`)

// let breakfast ="cereal";
// let lunch ="fishfinger sandwich";
// let dinner ="more pasta";
// breakfast ="oats";
// console.log(`I had ${breakfast} for breakfast, for lunch I had a ${lunch}, and for dinner I had even ${dinner}`);

// let a = 5;
// console.log(a + 35 - a - a);
// console.log(a += 35);

// let myNumber = "74";
// myNumber += 3;
// console.log(myNumber)

// let hunger="jelly";

// if (hunger == "jelly") {
//     console.log("Yes please I'm starving");
// } else if (hunger == "full") {  
//     console.log("No thanks, ate way too much!");
// } else if (hunger == "starving") {
//     console.log("oh go on then");
// } else {
//     console.log("no thanks");
// }

// let music="classic";
// if (music == "classic") {
//     console.log("Oh, how relaxing")
// } else if (music == "disco") {
//     console.log("Where are my dancing shoes?")
// } else if (music == "dance") {
//     console.log("Where's the party?")
// } else {
//     console.log("Turn it down")
// }

// if (4 != "5") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// |

// let age="";
// if (age >= "17") {
//     console.log("Yes I can serve you")
// }
// else{
//     console.log("You aren't old enough")
// }

// let food = "sprouts"
// let hunger = "full"

// if (hunger == "full" && food == "ice cream") {
//     console.log("y not")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("i want more pizza too")
// }
// else if (hunger == "hungry" && food == "sprouts") {
//     console.log("ah boy yeh god on")
// }
// else{
//     console.log("nah Im good")
// }

// let Food = "chips"

// if (Food == "sprouts" || Food == "pizza") {
//     console.log("amazing")
// }
// else if (Food == "sprouts" || Food == "chips") {
//     console.log("maybe not")
// }
// else{
//     console.log("fine")
// }

// let day = ""

// if (day == "Saturday" || day == "Sunday") {
//     console.log("its the weekend go off")
// }
// else{
//     console.log("hate work")
// }

// let food = "ice cream"

// switch (food) {
//     case "ice cream":
//     case "pizza":
//         console.log("yay go on")
//         break
//     case "sprouts":
//     case "broccoli":
//     case "jelly":
//         console.log("ugh why")
//         break
//     default:
//         console.log("okay fine")
// }

// let topping = "tea leaves";

// switch (topping) {
//     case "mushroom":
//     case "peppers":
//         console.log("these are my fave ones");
//         break
//     case "pepperoni":
//     case "dust":
//         console.log(`I dont like ${topping} on my pizza`);
//         break
//     case "pineapple":
//     case "tea leaves":
//         console.log(`i dont mind ${topping} on my pizza`);
//         break
//     default:
//         console.log("my pizza seems a bit empty");
// }

// let password = "hello23456";

// if (password.length < "8") {
//     console.log ("Password is too short");
// }
// else if (password.length >="8") {
//     console.log ("Log password");
// }

// let num = [1661];
// let reversed = num.reverse();
// reversed[] = 4;
// console.log (numbers[1661]);

// let num = 8;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log ("yes");
// }
// else if (num % 5 === 0) {
//     console.log ("buzz");
// }
// else if (num % 3 === 0) {
//     console.log ("fizz");
// }
// else {
//     console.log ("no");
// }


// let time = "09:25:00";

// if (time <= "08:00:00") {
//     console.log ("at home");
// }
// else if (time >= "09:00:00") {
//     console.log ("at work");
// }
// else if (time > "08:00:00" && time < "09:00:00") {
//     console.log ("commuting");
// }
// else {
//     console.log ("are you even here");
// }

// let rdm = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// // console.log(rdm.lastIndexOf("a")) 
// // console.log (rdm.lastIndexOf("i"))
// // console.log (rdm.length);
// // console.log (rdm.charAt(""))
// console.log(Math.max(rdm.lastIndexOf("a"), rdm.lastIndexOf("e"),rdm.lastIndexOf("i"),rdm.lastIndexOf("o"),rdm.lastIndexOf("u")))

let verify = [",", "a"]
let example = ["fejhnklvsernjkvl,lsdn,vjks,dvln,jsdkl"];
let example2 = example[0].split("");
let example3;

for (let i = 0; i < verify.length; i++){
    for (let x = 0; x < verify.length; x++) {
       if (example2[i] == verify[x]) {
        example3.push(example2[i]);
       } 
    }
}
