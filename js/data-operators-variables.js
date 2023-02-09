let a = 1;
// a = 1
let b = a++;
// b = 1
let c = ++a;
// c = 3
let d = "hello";
// hello +1
let e = false;
// false + 1
let preplexed;
preplexed + 2;
// undefined
let price = 2.7;
price.toFixed(2);
// 2.7
isNaN(0)
// false
isNaN(1)
// false
isNaN("")
// true
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
console.log(sample.length);
//sample = sample.toLowerCase();
console.log(sample);
console.log(sample , "Students");
console.log(sample , "Class");
console.log(sample.indexOf('c'));
console.log(sample.indexOf('C'));
let substring = sample.substring('6', '13');
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
console.log( `Thank you for your rental of ${movie1}, ${movie2}, and ${movie3}. The total cost for renting these movies is $ ${totalCost.toFixed(2)}.`)

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
console.log(`After working ${hour1} hours at ${company1}, ${hour2} hours at ${company2}, and ${hour3} hours at ${company3}. Your total payment is $${weekPay.toFixed(2)}`)

let student = Boolean(false)
let classSize = 100
let classSchedule = 10
if (student) {
    classSize>=0 && classSchedule<=0
}
console.log(student)

