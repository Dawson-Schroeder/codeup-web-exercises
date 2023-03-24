//"use strict";

//parseInt("35");

//creating your own function
// hoisting function

// arrow function (look into) (do this to impress)

//const helloWorld = (name) => {
    //alert(`Hello, ${name}`);
    // let message = `Hello ${name}`;
    // return message;
// }
//
// let firstHello = helloWorld("Dawson");
// console.log(firstHello)
// let secondHello = helloWorld("Mr. Schroeder");
// alert(secondHelllo);
//
// const parseDiscordNames = (name) => {
//     let discordName = "[YoloBob]Dawson";
//     let guildCharEnd = name.indexOf(']') + 1 ;
//     let guildName = name.substring(0, guildCharEnd);
//     let userName = name.substring(guildCharEnd);
//     let message = `The user's name is ${username}.\n
//     They are a member of the${guildName} guild.`;
//     let nameArray = [guildName, userName];
//     return nameArray;
// }
// let discordNames = parseDiscordNames("[YoLoBoB]Dawson");
// console.log(discordName);
// let discordName2 = parseDiscordNames("[GAMER]Billy");


//const highFive = (name1, name2) => {
  //  let message = `${name1} gives ${name2} a high five.`;
    //return message;
//}
// could be written as.. (short as possible, arrow function)
// const highFive = (name1 , name2) => `${name1} gives ${name2} a high five.`;

//let names1 = highFive("Dawson", "Schroeder");
//console.log(names1)

// create a function isEven(num) that takes an integer as an argument
// it returns true if the integer is even and false if not
/*
const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}
let students = 26;
let evenStudents = isEven(students);

// IIFE immedidetly invoked function expression:
//IIFE arrow function:
(() => {


})();

//IFFE traditional:
(function(){

})();

function myFunction(input) {
    var output = do something to calculate output;
return output;
}
 */
// if (isNaN(parseFloat(input))){ can be swapped with what is there currently (2nd line down)
// function negatize(number){
//     if (typeof input === "string" || isNaN(parseFloat(input))) {
//         return "That is not a number!"
//     } else if{
//         return: -input
//     }else{
//         return input
//     }
    // if (number > 0) {
    //     return -number;
    // } else if (number <= 0){
    //     return number;
    // } else if(typeof number === 'string');
    // return "That is not a number!";
//}
// function reverseString(string){
//     let stringArray = string.split('');
//     console.log(stringArray);
//     let reverseStringArray = stringArray.reverse();
//     console.log(reverseStringArray)
//     return reversedStringArray.join('');
// }

// return string.split('').reverse().join('');

let flavor = prompt(" Welcome to Codeup Ice Cream! What flavor do you want?");
if(flavor === "chocolate"){
    alert("One chocolate coming right up!")
} else if (flavor === "vanilla") {
    alert("One vanilla coming right up!")
}
else {
    alert("We dont have that flavor, sorry :(");
}

// switch statements
switch(flavor.toLowerCase()) {
    case("chocolate"):
        alert("One chocolate coming right up");
        break;
    case("vanilla"):
        alert("One vanilla coming right up");
        break;
    case("strawberry"):
        alert("One strawberry coming right up");
        break;
    default:
        alert("Sorry we dont have that");
}

function serveIceCream(flavor) {
    if (flavor === "chocolate"
        || flavor === "vanilla"
        || flavor === "strawberry"){
        alert(`One ${flavor} coming right up!`);
    } else {
        alert(`Sorry we dont have that flavor.`)
    }
}
serveIceCream(prompt("Welcome to Codeup Ice Cream. What flavor would you like?").toLowerCase());

function divisibleByFive(number){
    if (number % 5 === 0){
        console.log("Divisible by five!");
    } else {
        console.log("Not divisible by five");
    }

}

// Ternary statement !!!!!!!!!!!!!!!!!!!!!!!!!!!
const divisibleByFiveTernary = number => {
    number % 5 === 0 ? console.log("divisible by 5") : console.log("Not Divisible by 5");
}

const divisible = (dividend, divisor) => {
    divident % divsor === 0 ? console.log(`Divisible by ${divisor}!`) : console.log(`Not divisable by ${divisor}!`);
}

const divisible = (dividend, divisor) => {
    return divident % divsor === 0 ? console.log(`Divisible by ${divisor}!`) : console.log(`Not divisable by ${divisor}!`);
}
