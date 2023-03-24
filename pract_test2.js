"use strict";
/* TODO:
- Make a function named `isOdd(number)`
- Make a function named `isEven(number)`
- Make a function named `identity(input)` that returns the input exactly as
  provided.
- Make a function named `isFive(input)`
- Make a function named `addFive(input)` that adds five to some input.
- Make a function named `isMultipleOfFive(input)`
- Make a function named `isThree(input)`
- Make a function named `isMultipleOfThree(input)`
- Make a function named `isMultipleOfThreeAndFive(input)`
- Make a function named `isMultipleOf(target, n)` which checks if target is
  evenly divisible by `n`
- Make a function named `isTrue(boolean)`
- Make a function named `isFalse(boolean)`
- Make a function named `isTruthy(input)`, remember that values other than true
  will behave like true
- Make a function named `isFalsy(input)`, remember that values other than false
  behave like false
- Make a function named `isVowel(letter)`
- Make a function named `isConsonant(letter)`
- Make a function named `isCapital(letter)`
- Make a function named `isLowerCase(letter)`
- Make a function named `hasLowerCase(string)` that returns if a string has any
  lower cased letter
- Make a function named `isSpace(letter)` that returns if a character is a space
  character
- Make a function named `isZero(number)`
- Make a function named `notZero(input)` that returns true if the input is not
  zero
- Write a function named `lowerCase(string)`
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
- Write a function named `invertSign(number)` that returns a negative version of
  a postive number, a positve version of negative, and false for all else.
- Write a function named `degreesToRadians(number)`
- Write a function named `radiansToDegrees(number)`
- Make a function named `isBlank(input)` that determines if a given input is
  spaces, newline characters, or tabs.
- Make a function named `trim(string)` that removes empty spaces before and
  after the input.
- Make a function named `areEqual(input1, input2)` that returns if both inputs
  have the same value
- Make a function named `areIdentical(input1, input2)` that returns if both
  inputs are same value and data type.
- Make a function named `not(input)` returns the input with a flipped boolean
- Make a function named `notNot(input)` that the negation of the negation of the
  input.
- Make a function named `and(predicate1, predicate2)` that returns the logical
  operation of AND
- Make a function named `or(predicate1, predicate2)` that returns the logical
  operation of OR
- Write a function called `reverseString(string)` that reverses a string
- Make a function named `absoluteValue(number)` that returns the absolute value
  of a number.
- Make a function named `rollDice(sides)` that takes in an argument containing
  the number of sides the die should have. Generate a random number between 1 up
  to and including the number of sides.
 */

function isOdd(x){
    if(x % 2 === 0){
        return false
    }else if(x % 2 != 0){
        return true
    }
}
console.log(isOdd(12));

function isEven(x){
    if(x % 2 === 0){
        return true
    }else if(x % 2 !== 0){
        return false
    } else if(x !== number){
        return false
    }
}
console.log(isEven(12));

function identify(x){
    return x
}
console.log(identify("hello"));

function isFive(x){
    if(x === 5){
        return true
    } else {
        return false
    }
}
console.log(isFive(5))

function addFive(x){
    return (x + 5);
}
console.log(addFive(10))

function isMultipleOfFive(x){
    if(x % 5 === 0){
        return true
    } else{
        return false
    }
}
console.log(isMultipleOfFive(25))

function isMultipleOfThreeAndFive(x){
    if(x % 3 === 0 && x % 5 === 0){
        return true
    } else{
        return false
    }
}
console.log(isMultipleOfThreeAndFive(15))

function isMultipleOf(target, n){
    return ((target % n) === 0);
}
console.log(isMultipleOf(15, 6))

function isTrue(x){
    if(x === 0 || x === undefined){
        return false
    }else if(x === 1){
        return true
    }
}
console.log(isTrue(1))

function remainder(a, b){
    return a / b
}
console.log(remainder(12, 24));

function squareRoot(n){
    return Math.sqrt(n)
}
console.log(squareRoot(25))

function cubeRoot(n){
    return Math.cbrt(n)
}
console.log(cubeRoot(125))

function degreesToRadians(number){
     return ((3.14159 / 180) * number)
}
console.log(degreesToRadians(360))

// function reverseString(string){
//     return string.reverse("")
// }
// console.log(reverseString("Hello"))

//    a^2 + b^2 = c^2
function findSlope(x1,x2,y1,y2){
    return ((y2-y1)/(x2-x1))
}
console.log(findSlope(5,25,10,50));