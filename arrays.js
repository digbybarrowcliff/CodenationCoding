
// ACTIVITY 1 ///////////////////////
let favFilms = [
    "scooby doo 1",
    "scooby doo 2 - 'Haunted Island'",
    "scooby doo 3 (TBA)",
    "avatar",
    "avatar 2",
    "avatar 3",
]
// favFilms [2] = "scooby doo 4";
favFilms.unshift(5);
console.log (favFilms)


// .unshift() - adds one or more elements to the beginning of the array and returns the new length
// .pop();
// //removes last element from an array and returns it.
// .shift();
//removes the first element from an array and returns it
// .slice(#)
// slices the array after the inputted number, e.g. .slice(2, -2) will cut the array after the second one and 2 from the end.
//. map e.g. const map1 = array1.map(x => x *2) - this will multiply each number in the array by 2

// Activity 5 ///////////////////////////////////

let favSongs = [
    "Abba",
    "queen",
    "soundtracks",
    "game music",
]

favSongs.unshift("more abba", "dance music")
console.log (favSongs)
favSongs.pop(1)
console.log(favSongs)