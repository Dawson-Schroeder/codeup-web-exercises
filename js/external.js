"use strict";

console.log("Hello from external javascript.");
alert("Welcome to my website!");


let userColor = prompt("What is your favorite color?");
alert(`Great, ${userColor} is my favorite color to!`);

let movie1 = "The little mermaid";
let movie2 = "Brother bear";
let movie3 = "Hercules";
let pricePerDay = 3.00.toFixed(2);

let userInteraction1 = prompt(`How long would you like to rent ${movie1}?`);
alert(`Great! Enjoy ${movie1} for ${userInteraction1} days!` );
let userInteraction2 = prompt(`How long would you like to rent ${movie2}?`);
alert(`Great! Enjoy ${movie2} for ${userInteraction2} days!` );
let userInteraction3 = prompt(`How long would you like to rent ${movie3}?`);
alert(`Great! Enjoy ${movie3} for ${userInteraction3} days!` );

let cost1 = pricePerDay * userInteraction1;
let cost2 = pricePerDay * userInteraction2;
let cost3 = pricePerDay * userInteraction3;
let totalCost = cost1 + cost2 + cost3
console.log(totalCost);
console.log( `Thank you for your rental of ${movie1}, ${movie2}, and ${movie3}. \nThe total cost for renting these movies is $ ${totalCost.toFixed(2)}.`)
alert(`Thank you for your rental of ${movie1}, ${movie2}, and ${movie3}. \nThe total cost for renting these movies is $ ${totalCost.toFixed(2)}.`)


let company1 = "Google";
let company2 = "Amazon";
let company3 = "Facebook";

let rate1 = 400;
let rate2 = 380;
let rate3 = 350;

let hoursWorked1 = prompt(`How many hours did you work at ${company1}?`);
let hoursWorked2 = prompt(`How many hours did you work at ${company2}?`);
let hoursWorked3 = prompt(`How many hours did you work at ${company3}?`)

let weekPay = (rate1 * hoursWorked1) + (rate2 * hoursWorked2) + (rate3 * hoursWorked3);
console.log(weekPay);
console.log(`After working ${hoursWorked1} hours at ${company1}, ${hoursWorked2} hours at ${company2}, and ${hoursWorked3} hours at ${company3}. Your total payment is $${weekPay.toFixed(2)}`);
alert(`After working ${hoursWorked1} hours at ${company1}, ${hoursWorked2} hours at ${company2}, and ${hoursWorked3} hours at ${company3}. Your total payment is $${weekPay.toFixed(2)}`);


let scheduleConflicts = false;
let currentClassSizeUser = prompt(`What is the current number of students enrolled in your class for this semester?`);
let maxClassSize = 50;
let canEnroll = !scheduleConflicts  && currentClassSizeUser <= maxClassSize;
console.log(canEnroll)
if(canEnroll){
    alert("You can sign up for this class.")
} else {
    alert("You can not sign up for this class")
}


let mainCartSize = 4;
let cartSize = prompt("How many items are in your cart?");;
let premiumMember = confirm("Confirm that you are a premium member?");
let offerExpired = false;
let canOfferApply = (premiumMember || (cartSize >= mainCartSize)) && !offerExpired ;
console.log(canOfferApply);
if(canOfferApply){
    alert("Your discount has been applied.")
} else {
    alert("You are not eligible for a discount.")
}


