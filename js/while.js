"use strict";

// let i = 1
// while(i < 65536){
//     i *= 2
//     console.log(`${i}`)
// }

// do while loop ice cream shop

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
let conesSold = Math.floor(Math.random() * 5) + 1;

//console.log(`Starting the day with ${allCones} cones!`)

do {
    if (conesSold <= allCones) {
        console.log(`We have ${allCones} cones!`)
        allCones -= conesSold
        console.log(`${conesSold} ice cream cones sold!`)
        console.log(`${allCones} are left!`)
    } else {
        console.log(`We cannot sell you ${conesSold} we only have ${allCones} left!`);
    }
} while (allCones >= 0) ;
    if (allCones <= conesSold) {
        console.log(`Yay! we sold out of ice cream cones`)}
    // } else {
    //     console.log(`We cannot sell you ${conesSold} we only have ${allCones} left!`);
    // }




/*  in class
let i = 1
let multipliedBy = 2
let accumulator = 1
while(i <= 16){

    i++;
}

////// Ice Cream Cones in Class //////

let coneInventory = randomNumber(50, 100);

do{
    let conesWanted = randomNumber(1, 5);
    if (conesWanted > conesInventory){
    console.log(`Cannot sell you ${conesWanted}, I only have ${conesInventory}`);
    console.log(`${conesInventory} sold...`);
    conesInventory = 0;
    } else {
    console.log(`${conesWanted} sold...`);
    conesInventory = conesInventory - conesWanted;
    }
    console.log(`${conesInventory} left`);
} while(conesInventory > 0);
    console.log(`Yay! I've sold them all!`);
} while(conesInventory = 0);
    console.log(`Yay! I've sold them all`);

*/











