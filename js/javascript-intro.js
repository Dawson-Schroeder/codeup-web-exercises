// this is a comment
/* this is a comment that allows me to keep typing until I decide to end it with another star forward slash
green = string
blue = number
orange = boolean
 *//*
let var1 = true
let var2 = 143431.09;
let var3 = "Hello Codeup";
let var4 = "143431.09";
let var5 = "2" + "2";
console.log(var5);
let var6 = 2 + 2;
console.log(var6);
let var7 = "2" + 2;
console.log(var7);
let var8 = "Dawson's been coding";
let var9 = `It wouldn't matter if i used 'single' or "double" while using a back tick for a string`;


let var10;
console.log(var10);*/
// will come back as undefined

//let var11 = 'I like Yamba\'s sweater';
//this slash allows you to tell js to ignore the other tick character in Yamba's

//console.log( typeof "Dawson" );
//console.log( typeof 6 );
// console.log( typeof false );
// console.log(typeof var10 );
//
// console.log( typeof 5*5 );
// console.log( 5 * 5 - (15 - 5) );
// console.log( 6 % 4 );

//string concat:
// console.log( "Hello" + " World" );
// console.log( "Hello" - " World" );
//NaN means not a number

//Logical Boolean
/*
&& AND - all values
|| OR  - either or
! NOT  - opposite
 */
// console.log( true || 'true' );
// console.log( true && false );
// console.log( true && true && false );
// console.log( false || false );
// console.log( false || false || true );
// let var12 = false;
// let var13 = "Logged in user";
// console.log( var12 || var13 )
// js is looking at var12 and var13 looking for the first true value to be able to output that information b/c of the or value.

/*comparison's
== equal in value
=== equal in type and value
!= not equal in value
!== not equal in type and value
 */
/*
let userName = "Dawson";
let nameIdontLike = "Dawson";
console.log( userName === nameIdontLike );

let var14 = 24;
let var15 = "24";
console.log( var14 == var15 )

console.log( 24 === 24 );
console.log( 24 != 24 );
*/
// "2" == 2 // this works (loose) type
// "2" === 2 // this does not work (strict) type and value
//!= // loose comparison (loose) type
/// !== // strict comparison (strict) type and value

//variables
//Variables are placeholders for data
//var variableName;
//let myShoes = "Chucks";
//const myName = "Dawson";
//myShoes = "Chanclas";
//const cannot be re-assinged
//let can be re-assinged

//let myBankAccount = 10 - 2 * 8 + 16 / 2;
//console.log(myBankAccount);
// 2

//myBankAccount = myBankAccount + 1
//myBankAccount += 1;
//3

//myBankAccount = myBankAccount - 1
//myBankAccount -= 1;
// 2

//myBankAccount = myBankAccount % 2;
//myBankAccount %= 2
/*
let counter = 1;

counter ++;
// = 1
counter--;

++counter:
//
--counter;
*/
// ++ means incrimenting
// -- means decimating

//let pie = 3.14;

//pie = pie.toFixed(1);
// .toFixed can be ran on numbers and not strings
//.toFixed is to change the decimal points.
//console.log(pie);
//  3.1

// let price = '$ ' + 21.50.toFixed(2);
// could also use .toFixed for this as well
// $ 21.50

//let students = 24;
//students =students.toString();
// turns the number 24 into a string
// .toString will turn it into a string

//let students2 = "24";
//students2 = parseInt(students2);
// parseInt() will turn a string into a number
// will stop at the decimal place
// string must start with a number or js will run a NAN

let students3 = false;
//students3 = parseFloat(students3);
//parseFloat will pull out decimal places and read all numbers

console.log(isNaN(students3));
// isNaN is asking if it is a number.
//isNaN will produce a true or false answer

/*
let user = "Dawson";
let dontLike = "dawson";
let message = "I dont like you go away!";
message = message.toUpperCase();
if (user.toLowerCase === dontLike.toLowerCase) {
    console.log(message)
} else {
    console.log("Not Dawson, youre cool";)
}
 */
// let price = "$24.52";
// price = price.replace('$', '');
// price = parseFloat(price);
// console.log(price)
//
let discordName = "[YOLO]Dawson";
// discordName = discordName.toLowerCase();
 discordName = discordName.replace('[yolo]', '');
// console.log(discordName)
//dawson

//working on strings
// .length will tell you how many characters/positions are in a string (It starts counting from 1)
// can put a string inside of a console.log :  console.log('Fruits length follow ' , fruits);

//.substring();
//let shortName = discordName.substring( 0 , 3 );
//console.log(shortName);
//daw

let discordName2 = "[aasd]David";
let guildCharEnd = discordName2.indexOf( ']') + 1;
let guildName = discordName2.substring(0,guildCharEnd);
//     discordName2 = discordName2.substring(guildCharEnd);
// console.log("This users guild is => " , guildName);
// console.log("This users name is => " , discordName2);
// let consoleMessage = `The user's name is ${discordName2}. They are a member of the ${guildName} guild.`
// console.log(consoleMessage)`









