// Create a simple cyberpet.
// We should be able to choose from at least 2 types of pet.
// We should be able to play with, feed, and clean our pet.
// Remember that actions have consequences.


class Pet {
    constructor (name, type, colour, temperament, age, prefFood, feedLength, prefinteraction) {
        this.name = name;
        this.type = type;
        this.colour = colour;
        this.temperament = temperament;
        this.age = age; // DAYS
        this.prefFood = prefFood;
        this.feedLength = feedLength; //HOURS
        this.prefinteraction = prefinteraction;
    }
    petInfo (name) {
        this.name = name;
        return `Your pet's name is ${this.name}. It is a ${this.colour} ${this.type}. It is ${this.age} old and has a ${this.temperament} temperament. It needs to be fed ${this.prefFood} every ${this.feedLength} hours.`;
    }
    feedFunction (fooooood) {
        if (fooooood === this.prefFood) {
            return `Great, ${this.name} feels full`
        }
        else {
            return `Ouch, ${this.name} bit you! Try feeding it something it likes.`
        }
    }
    feedFunctionTime (feedTime) {
        if (feedTime > this.feedLength)
            return `Oh no, you've let ${this.name} go hungry. It doesn't feel too well.`
        }
}
const pet1 = new Pet("pet 1","cat","yellow","angry", 2, "biscuits", 2, "cuddling")
console.log(pet1.feedFunction(3))






// A feed function

// let cuddle = true
if (cuddle == true) {console.log("I am a happy cyberpet!")}
else {console.log ("Can I have a cuddle?")} 

let hunger = false
if (hunger == false) {console.log("That was delicious! Thank you!")}
else {console.log ("I'm hungry, please feed me.")}

let walked = false
if (walked == true) {console.log("That was such a nice walk. Im tired now. Can I take a nap?")}
else {console.log("I have so much energy, can I go for a walk?")}


// function where it gets more hungry over time? i.e. each pet needs to be feed within a certain time

// NEW PETS BELOW HERE

// const pet1 = new Pet("")
// const pet1 = new Pet("")