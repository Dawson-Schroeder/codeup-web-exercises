"use strict";

/*
Create a function named showMultiplicationTable that accepts a number and
console.logs the multiplication table for that number (just multiply by the
numbers 1 through 10)
 */

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}.`)
    }}
showMultiplicationTable(5);

/*
Use a for loop and the code from the previous lessons to generate 10 random
numbers between 20 and 200 and output to the console whether each number is
odd or even.
 */

const randomNumber = () => Math.floor(Math.random() * (200 - 20 + 1) + 20);
for ( let i = 1; i <= 10; i++){
    let num = randomNumber()
    console.log(num % 2 === 0 ? num + " is an even number" : num + " is an odd number")
}
/*
for(let i = 1; i <= 10; i++){
let myRandomNumber = randomNumber(20, 200) //using connecting function in utils
    if(myRandomNumber % 2 === 0){
        console.log(`${myRandomNumber} is even`)
    } else {
        console.log(`${myRandomNumber} is odd`)
        }}
 */

/*
generates a number and repeats that number i times
EX:
1
22
333
4444
55555
 */

for ( let i = 1; i <= 9; i++){
    console.log(String(i).repeat(i))
    // or
    //let output = `${i}`.repeat(i);
}
/*
for(let i = 0; i < 9; i++){
    let output = `${i + 1}`;
    for(let j = i; j > 0; j--)
    let moNumbers = `${i + 1}`
    output += moNumbers
        console.log(output)
 */

/*
sets a loop to count down from 100 by incriments of -5 until it hits zero and stops.
 */

for ( let i = 100; i >= 0; i -= 5 ){
    console.log(i)
}
/*
for(let i = 100; i > 0; i -= 5){

}
 */

