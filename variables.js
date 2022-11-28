// let favouriteDrink = "wine"
// let thisNumber = 5
// let firstName = "digby"
// console.log(favouriteDrink, thisNumber, firstName)
// console.log(`my name is ${firstName}, i am ${thisNumber} years old and I like ${favouriteDrink}`)

// // ACTIVITY 4 ///////////////////////////////// calculating elapsed time
// taken from stackoverflow



// const today = new Date('2022-11-28')
// const birthday = new Date('1998-05-10');
// const timeDif = Math.abs(birthday - today);
// const dayDif = Math.floor(timeDif / (1000 * 60 * 60 * 24));
// console.log(timeDif + " milliseconds")
// console.log(dayDif + " days")


// a and b are javascript Date objects - this is to make the zones UTC correct
function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  
  // test it
  const a = new Date("1998-05-10"),
      b = new Date("2022-11-28"),
      difference = dateDiffInDays(a, b);
      
  console.log(difference + ' days')






//////////random code
// petDeath () {
//     if (this.health === 0)
// }
// if health === 0;
// $().click(function(){
//     $().trigger(death);
// })

// setTimeout (petDeath)