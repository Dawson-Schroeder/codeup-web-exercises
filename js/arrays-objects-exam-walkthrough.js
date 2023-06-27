"use strict";
function isNumericAndNotNaN(input){
    return !isNaN(input) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}
function checkForNumber(input){
    if (isNumericAndNotNaN(input)){
     return "number";
    } else {
        return "not a number";
    }
}
const checkForNumber = input => {

}

function evenOrOdd(input){
    if (input % 2 === 0){
        return "even"
    } else{
        return "odd"
    }
}

function doubleTheElements(array){
    const arrayOfDoubledNumbers = [];
    array.forEach(number => {
        arrayOfDoubledNumbers.push(number * 2);
    });
    return arrayOfDoubledNumbers;
}

function sumOfElements(array){
    let sum = 0;
    array.forEach(number=>sum+=number);
    return sum;
}

function totalPrice(arrayOfObjects){
    let total = 0;
    arrayOfObjects.forEach(object=> total+=object.price);
    return total;
}

function findHighestPrice(arrayOfObjects){
    const prices = [];
    arrayOfObjects.forEach(object=> prices.push(object.price));
    return Math.max(...prices);
    // or
    // return prices.sort((a,b)=>a-b)[prices.length-1]
}

function discountCheck(object){
    return object.clubMember || totalPrice(object.items) > 150;
}

function newProduct(name, price){
    return {
        name: name,
        price: price
    }
}

function countWords(string){
    return string.split(' ').length;
}

function describeNumber(interger){
    interger = parseInt(interger);
    return {
        value: interger,
        evenOrOdd: evenOrOdd(interger),
        numberOfDigits: interger.toString().length
    }
}

function screamingSnakeCase(string){
    return string.split(' ').join('_').toUpperCase()
}


