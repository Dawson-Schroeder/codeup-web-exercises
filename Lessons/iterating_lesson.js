"use strict";

let fruits = ["bananas", "appple's", "oranges", "mango's", "tomatoes"];


let var1 = fruits[2];
console.log(var1);

let numberOfFruits = fruits.length
console.log(`The number of fruits => `, numberOfFruits);

let fruitsString = fruits.toString();
console.log(`using toString() on fruits => `, fruitsString)

let fruitsAndNumbers = ["bananas", 2, "apples", 8675309, undefined];
console.log(fruitsAndNumbers);

const returnString = (input) => {
    return input;
}

let stringsList = [returnString("Jason"), returnString("Javier"), returnString("Justin")];
console.log(`stringsList follows => `, stringsList);


for(let i = 0; i < fruits.length; i++){
    let fruit = fruits[i];
    console.log(fruit);
}


/*
fruits.forEach(function(element, index, array){
    console.log("the element follows", element);
    console.log("the index follows", index);
    console.log("the array follows", array);
});
// now as an arrow function:
fruits.forEach((element, index, array) => {
    console.log("the element follows", element);
    console.log("the index follows", index);
    console.log("the array follows", array);
});

let favFruits = [];
fruits.forEach((element, index, array) => {
    if(fruit === "apples" || "tomatoes"){
        favFruits.push(fruit);
    }
});

//////////////////////

let studentSeating = [
    ["Dawson", "Name2", "Name3", "Name4"],
    ["Namw5", "Name5", "Name6", "Name7"],
];
studentSeating.forEach((row) =>{
    row.forEach((students) => {
        console.log(students)
    });
});

///////////////////
*/