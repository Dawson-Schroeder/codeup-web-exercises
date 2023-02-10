let a = 1;
// a = 1
let b = a++; //b = 1, a = 1
// b = 1, a = 2
let c = ++a; // a = 3
// c = 3
// a = 3, b = 1, c = 3
let d = "hello";
// d = NaN
let e = false;
// e = 1
let preplexed;
preplexed + 2;
// NaN
let price = 2.7;
price.toFixed(2);
// "2.70"
isNaN(0)
// false
isNaN(1)
// false
isNaN("")
// false
isNaN("string")
//true
isNaN("0")
// false
isNaN("1")
// false
isNaN("3.145")
// false
isNaN(Number.MAX_VALUE)
// false
isNaN(Infinity)
// false
isNaN("true")
// true
isNaN(true)
// false
isNaN("false")
// true
isNaN(false)
// false
!true
// false
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true

let sample = "Hello Codeup";
//let sampleLength = sample.length;
console.log(sample.length);
//sample = sample.toLowerCase();
console.log(sample);
console.log(sample , "Students");
// let sampleJoin = sample + "students";
// let sampleJoinBetter = `${sample} Students`;
console.log(sample , "Class");
//let sampleJoinPlace = sampleJoin.replace( 'Students' , 'Class' );
console.log(sample.indexOf('c'));
//let cIndex = sampleJoinReplace.indexOf('c');
//console.log(cIndex);
console.log(sample.indexOf('C'));
//let capCIndex = sampleJoinReplace.indexOf('C');
let substring = sample.substring('6', '13');
//let codeupWord = sampleJoinReplace.substring(capCIndex, 12);
console.log( substring )

let movie1 = "The little mermaid";
let movie2 = "Brother bear";
let movie3 = "Hercules";
let pricePerDay = 3.00.toFixed(2);
let cost1 = pricePerDay * 3 ;
let cost2 = pricePerDay * 5 ;
let cost3 = pricePerDay * 1 ;
let totalCost = cost1 + cost2 + cost3
console.log(totalCost);
console.log( `Thank you for your rental of ${movie1}, ${movie2}, and ${movie3}. \nThe total cost for renting these movies is $ ${totalCost.toFixed(2)}.`)

let company1 = "Google";
let company2 = "Amazon";
let company3 = "Facebook";
let rate1 = 400;
let rate2 = 380;
let rate3 = 350;
let hour1 = 6;
let hour2 = 4 ;
let hour3 = 10;
let weekPay = (rate1 * hour1) + (rate2 * hour2) + (rate3 * hour3);
console.log(weekPay);
//let formattedPaycheck = weekPay.toLocaleString("en-US, {style:"currency", currency:"USD"});
console.log(`After working ${hour1} hours at ${company1}, ${hour2} hours at ${company2}, and ${hour3} hours at ${company3}. Your total payment is $${weekPay.toFixed(2)}`)

let classNotFull = true
let classScheduleWorks = true
let worksForStudent = classNotFull && classScheduleWorks
console.log(worksForStudent)
/* in class ex:
let scheduleConflicts = false;
let maxClassSize = 30;
let currentClassSize = 24;
let  canEnroll = !scheduleConflicts && currentClassSize < maxClassSize;
 */

let premium = true
let offer = true
let size = 4
let haveDiscount = ( offer && (premium || size ))
console.log(haveDiscount)
/* in class ex:
letMainCartSize = 2;
let cartSize = 3;
let premiumMember = false;
let offerExpired = false;
let canOfferApply = (premiumMember || (cartSize >= mainCartSize)) && !offerExpired
 */


let username = 'codeup';
let password = 'notastrongpassword';

let condition1 = password.length > 5;
let condition2 = password.indexOf(username) === -1
console.log(condition1)
console.log(condition2)

let condition3 = username.length <= 20;
username.trim( );
password.trim( );
console.log(condition3)
/* in class ex:
let minChar = password.length >= 5;
let noUserName = password.indexOf(username) >= 0;
let maxUserChar = username.length <= 20;
let userLength = username.length;
let passLength = password.Length;
let firstCharUser = username.substring(0, 1);
let lastCharUser = username.substring(userLength -1), userLength);
let firstCharPass = password.substring(0, 1);
let lastCharPass = password.substring((passLength -1), passLength);
let hasWhiteSpace = firstCharUser === ' ' || lastCharUser === ' ' || firstCharPass === ' ' || lastCharPass === ' ';
 */
