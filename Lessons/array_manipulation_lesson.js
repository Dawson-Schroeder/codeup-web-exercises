"use strict";

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const myName = "Dawson";
const sPosition = myName.indexOf('s')
console.log(sPosition);

// turning an array to a string
//const myNameArray = myName.split(",")
//"," splits by commas, " " splits every character.
/*
const thursday = daysOfWeek.indexOf("Thursday");
console.log(thursday);
*/

// will remove last item in the array
/*
const removeLast = daysOfWeek.pop();
console.log(daysOfWeek);
console.log(removeLast);
*/

// will remove first item in array
/*
const removeFirst = daysOfWeek.shift();
console.log(daysOfWeek);
console.log(removeFirst);
*/

// slicing
/*
const firstHalf = daysOfWeek.slice(0, 2);
console.log(daysOfWeek);
console.log(firstHalf);
 */

// removing an item in the middle
/*
const indexOfThursday = daysOfWeek.indexOf("Thursday");
const lastHalf = daysOfWeek.slice(indexOfThursday + 1);
const firstHalf = daysOfWeek.slice(0, indexOfThursday);
daysOfWeek = daysOfWeek.slice(0, indexOfThursday).join(',');
daysOfWeek += lastHalf.join(',');
daysOfWeek = daysOfWeek.split(',') + ',';
console.log(daysOfWeek);
*/

// spread operator
const indexOfThursday = daysOfWeek.indexOf("Thursday");
const lastHalf = daysOfWeek.slice(indexOfThursday);
const firstHalf = daysOfWeek.slice(0, indexOfThursday);
daysOfWeek = [
    ...firstHalf,
    ...lastHalf,
    "Merrellday"
];
console.log(daysOfWeek);

// using .splice
let removedDay = daysOfWeek.splice(indexOfThursday, 1);
console.log(daysOfWeek);
console.log(removedDay);