const array = [];
const obj = {};
const str = "";
const bool = true;
const func = () => {};

/////////////////////////////////////////////////////

const startTimeoutFunction = setTimeout(doSomething, 2000);

function doSomething() {
    // do stuff
}

function stopTimeoutFunction() {
    clearTimeout(startTimeoutFunction);
}

///////////////////////////////////////////////////////

const example = (time, message) => {
    window.setTimeout((message) => {
        console.log(message);
        example(2000, "hello there");
    }, time, message);
}
example(2000, "hello there");

////////////////////////////////////////////////////// countdown function

const timingFunction = () => {
    window.setTimeout(() => {
        pet.hunger -= 2;
        pet.thirst -= 2;
        pet.happiness -= 2;
        pet.cleanliness -= 2;
        pet.health -= 2;
        renderData();
        timingFunction();
    }, 2000);
}
timingFunction();
/////// GLOBAL CLEAR TIMEOUT
clearTimeout()

// const startTimeoutFunction = setTimeout(doSomething, 2000)  
//// therefore you need to put this in the timeout function

const doSomething = () => {
        pet.hunger -= 2;
        pet.thirst -= 2;
        pet.happiness -= 2;
        pet.cleanliness -= 2;
        pet.health -= 2;
        renderData();
        const startTimeoutFunction = setTimeout(doSomething, 2000)  
}