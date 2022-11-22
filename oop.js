// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     set fullName (name) {
//         const array = name.split(' ');
//         this.firstnamr = array [0];
//         this.surname = array [1];
//     }
//     // get petInfo () {
//     //     return `${this.name} is a ${this.type} and is ${this.age} years old`
//     // }
//     // feedPet (time) {
//     //     this.lastFed = time;
//     //     return `Last feed updated to ${this.lastFed} for ${this.name}`;
//     // }
// }
// const bella = new Pet ("Bella", 2, "Dog", "GS", "B&T", "08:00");
// bella.fullName = "Bella Crompton";
// console.log(bella);

// class petMeds extends pet {
//     constructor (name, age, type, breed, colour, time, mtime) {
//         super (name, age, type, breed, colour, time);
//         this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds updated to: ${this.lastMeds} for ${this.name}`
//     }
// }

// const bella = new pet ("Bella", 2, "Dog", "GS", "B&T", "08:00");
// const hannah = new petMeds("hannah", "25", "dog", "bt", "black", "08:00", "never");
// console.log(hannah.giveMeds("10:00"))

// class rental {
//     constructor (name, address, number, movies) {
//     this.name = name;
//     this.address = address;
//     this.number = number;
//     this.movies = movies;
//     }
//     giveFilmOptions (name) {
//         this.name = name;
//         return `The ${this.name} store is found on ${this.address} street, and has ${this.movies[1]} available. Contact them on ${this.number} if you wish to reserve a film`
//     }
// }

// const test = new rental ("Manchester", "Market", "089352144", ["pirates", "pirates 2", "pirates 3"])
// console.log (test.giveFilmOptions("manchester"))

let stringLet = "let string";
var stringVar = "var string";

const newString = () => {
    let stringLet = "new let string";
    var stringVar = "new var string";

    console.log(`Inside function: ${stringLet}`); //new
    console.log(`Inside function: ${stringVar}`); //new
}
new String();

console.log(`Outside function: ${stringLet}`); //old
console.log(`Outside function: ${stringVar}`); //old