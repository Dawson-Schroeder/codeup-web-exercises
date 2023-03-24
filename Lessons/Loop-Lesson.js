"use strict";


// in class lesson on loops.

/*
most basic loop is the while loop
while(condition){
    body
}
it will run the condition until the condition is true.
in the let below, i, stands for increment
 */
// let i =1;
// while(i <= 10){
//     console.log(`Loop #${i}`);
//     i++;
// }
//
// let x =2;
// while (x <= 10){
//     if (x % 2 === 0){
//         console.log(`Even loop #${x}`)
//     }
// }

//////////////////////////////

/* do while loop */
// let y =1;
// do {
//     console.log(`Loop #${i}`);
//     y++;
// } while(y <= 10)

//////////////////////////////

/*
for loop
for (initialization; condition; incrementor){
 */
// for (let z = 1; z <= 10; z++){
//     console.log(`Loop #${z}`)
// }

//////////////////////////////

// for (let a = 0; a < 10; a++){
//     console.log(a + 1)
// }

///////////////////////////////

// const getFactorial = (num) => {
//     let result = num;
//     for(let i = (num - 1); i > 0; i--){
//         result = i * result;
//     }
//     console.log(result);
//     return result;
// }
// getFactorial(5);

/* break; will kill the loop in all, continue; will just kill that section and move to the next.*/

/* doing a for loop in a for loop with use of a function as well*/

// const buildPyramid = (rows) => {
//     // loop through the rows
//     for (let i = 1; i <= rows; i++){
//         let row = "";
//         // loop to add spaces
//         for (let j = 1; j <= row - i; j++){
//             // pushing a space into row
//             row += "  ";
//         }
//         // loop to add the asterisks
//         for (let k = 1; k >= 2 * rows - 1 ; k++){
//             row += "* "
//         }
//         console.log(row)
//     }
// }
//
// buildPyramid(5);

