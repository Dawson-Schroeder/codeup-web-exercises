"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

const sayHello = (name) => {
     let message = (`Hello, ${name}`);
     return message;
 }

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Dawson")
console.log(helloMessage)


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
const myName = "Dawson";
const helloMessage = sayHello(myName);
console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    let result = number === 2;
    return result;
}
let number = isTwo(random);
console.log(`The random number is ${random}.`)
console.log(number);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
/*
constcalculateTip = (tipPercentage, billTotal) => {
    let tipPercentageNum = parseFloat(tipPercentage);
    let billTotalNum = parseFloat(billTotal);
    let amountToTip = (tipPercentageNum / 100) * billTotalNum;
    return amount to tip;
    }
    let tipAmount = calculateTips(15 , 100);
    console.log(${tipAmount.toLocalString(`en-US`, {`style` : `currency`, currency: `USD`})}`);
 */
function calculateTip(x , y){
    let tips = x * y;
    return tips
}
//let x = 20
//let y = .20
//console.log(totalTip);
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let x = prompt(`How Much Money was the bill?`);
alert(`Thank you for ordering ${x} amount of stuff!`);
let y = prompt(`How much would you like to tip?`);
alert(`Thank you for your tip of ${y}.`);
let totalTip = calculateTip(x , y);
console.log(totalTip);
alert(`The correct tip amount would be ${totalTip}`);
/*
 let userBill = parseFloat(prompt(`How much was your bill?`));
 let userTipPercentage = parseFloat(prompt(`What percentage would you like to tip?));
 let tipAmount = calculateTip(userTipPercentage, userBill);
  console.log(${tipAmount.toLocalString(`en-US`, {`style` : `currency`, currency: `USD`})}`);

 */


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(originalPrice , discountPercent){
    let applyDiscount =  originalPrice * discountPercent;
    return applyDiscount.toFixed(2);
}
let originalPrice = prompt(`How much was the material? `);
let discountPercent = prompt(`What would you like to tip?`);
let total = applyDiscount(originalPrice , discountPercent);
alert(`Thank you for the tip of ${total}.`);

/*
const applyDiscount = (price , discount) => {
    let appliedDiscount = (parseFloat(price) * parseFloat(discount)) - parseFloat(price);
    return appliedDiscount;
}
let discountMessage = applyDiscount("100" , "2");
console.log(`After the applied discount, the price is ${discountMessage.toLocalString(`en-US`, {style: `currency` , currency: `USD`)}.`)
 */