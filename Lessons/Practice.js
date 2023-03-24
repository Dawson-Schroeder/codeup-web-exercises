/*
Write a function named `lowerCase(string)`
- Write a function named `double(n)` that returns a number times two
- Write a function named `triple(n)` that returns a number times 3
- Write a function named `quadruple(n)` that returns a number times 4
- Write a function named `half(n)` that returns 1/2 of the provided input
- Write a function named `subtract(a, b)` that returns `a` minus `b`
- Write a function named `multiply(a, b)` that returns the product of `a` times
  `b`
- Write a function named divide(a, b) that returns `a` divided by ~b~
- Write a function named `remainder(a, b)` that returns the remainder after
  dividing a by b
- Make a function named `modulo(a, b)` that returns the returns the remainder
  after dividing a by b
- Write a function named `cube(n)` that returns n * n * n
- Write a function named `squareRoot(n)` that returns the square root of the
  input
- Write a function named `cubeRoot(n)` that returns the cube root of the input
 */

function double(n) {
    let result = n * 2;
    return result
}
console.log(double(5));

function tripple(n) {
    let result = n * 3;
    return result
}
console.log(tripple(12));

function quad(n) {
    let result = n * 4;
    return result;
}
console.log(quad(6));

function half(n) {
    let result = n / 2;
    return result;
}
console.log(half(12));

function subtract(x, y) {
    let result = x - y;
    return result;
}
console.log(subtract(12, 10));

function multiply(x, y){
    let result = x * y;
    return result;
}
console.log(multiply(12, 12));


function divide(x, y){
    let result = x / y;
    return result;
}
console.log(divide(120, 10));


function remainder(x, y){
    let result = x % y;
    return result;
}
console.log(remainder(145645, 2));


function modulo(x, y){
    let result = (x/y) % 2
    return result
}
console.log(modulo(12, 7))



// used in less than
function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}
// unit testing answers (some)
function isGreaterThan(val1,val2){
    return val1 > val2
}

function isLessThan(val1,val2){
    if(!isNumericAndNotNaN(val1) || !isNumericAndNotNaN(val2)){return false;}
    return val1 < val2;
}

function isEqualNumber(val1, val2){
    if(!isNumericAndNotNaN(val1) || !isNumericAndNotNaN(val2)){return false;}
    return val1 === val2;
}

function isEqual(val1 , val2){
    return val1 === val2;
}

function isNot(input){
    if(typeof input !== "boolean" || input === null){return false;}
    return !input;
}

function calcAbs(input){
    if(isNumericAndNotNaN(input)){return 0}
    return Math.abs(input);
}

function calcCube(input){
    if(isNumericAndNotNaN(input)){return 0}
    return input ** 3;
}

function isTypeMatch(val1 , val2){
    if(val1 === null || val2 === null){return false;}
    return typeof val1 === typeof val2
}

function findLongestString(val1 , val2){
    if(typeof input1 !== "string" && typeof input2 !== "string") return '';
    if(typeof input1 !== 'string' && typeof input2 === "string") return input2;
    if(typeof input1 === 'string' && typeof inpput2 !== "string") return input1;
    if (input1.length > input2.length){
        return input1;
    } else {
        return input2;
    }

}
function isFactor(input1 , input2){
    if(input1 === 0) return false;
    if(!isNumericAndNotNaN(input1) || !isNumericAndNotNaN(input2)){return false;}
    return input2 % input1 ===0;
}

///////// EXAM answers (functions solved differently than mine)/////////

function getHighestNumber(val1, val2, val3){
    if(!isNumericOrNumericString(val1) || !isNumericOrNumericString(val2)
    || !isNumericOrNumericString(val3)){return false;}
    return Math.max(val1, val2, val3);
}

function sumOfSquares(input1, input2){
    if(!isNumericOrNumericString(input1) || !isNumericOrNumericString(input2)){return false}
    return (parseFloat(input1) * parseFloat(input2)) + (parseFloat(input2) * parseFloat(input3))
}

function isPalindrome(input){
    if(isNumericOrNumericString(input) || input === undefined) return false;
    return input.toLowerCase() === input.toLowerCase().split(``).reverse().join();
}

// a more profesional way to do isPalindrome
function fastestPalindrome(str){
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
}