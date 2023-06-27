const employees = [
//     {
//     firstName: 'of3wccin',
//     lastName: 'owinv',
//     title: 'e3vwdczaxazin',
//     occupation: 'g3wcxzaxdvw',
//     },{
//     firstName: '12334',
//     lastName: '124321',
//     title: '1234',
//     occupation: '12423',
//     }
]
//
// employees.forEach(function(employee){
//     console.log('forEach =>', employee.firstName);
//     fetch('https://swapi.dev/api/people/1/')
//         .then(response=> response.json())
//         .then(data => {
//             console.log(data.name);
//         })
// });
//
// (async ()=>{
//     for(const employee of employees){
//         console.log('for...of =>', employee.firstName);
//         let response = await fetch('https://swapi.dev/api/people/1/');
//         let data = await response.json();
//         console.log(data.name)
//     }
// })();

// defult function parameter and arrow functions

// const HelloWorld = (name = 'World') => {
//     return `Hello, ${name}!`;
// }
// let response = HelloWorld('Dawson');
// console.log(response)
//
// const getPerson = async (id = 1) => {
//     let response = await fetch(`https://swapi.dev/api/people/${id}/`);
//     let data = await response.json();
//     console.log(data.name)
// }


// Object construction shorthand
// const getEmployee = async (id) => {
//     // let response = fetch();
//     // let data = await response.json();
//     let firstName = data.name.split(' ')[0];
//     let lastName = data.name.split(' ')[1];
//     // return {
//     //     firstName: firstName,
//     //     lastName: lastName
//     // }
//     // shorthand of above
//     return {
//         firstName,
//         lastName,
//         email: 'dawson@codeup.com'
//     }
// }

// Object Deconstruction shorthand
// let employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'piekngr@codeup.com',
//     position: 'Software Engineer',
//     startDate: '2000-01-01',
//     projects: {
//         currentProject: {
//             name: 'Nexus',
//             startDate: '01-01-2001'
//         },
//         previousProjects: []
//     }
// }
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;
// shorthand below
// let {firstName, lastName, email, position, startDate, projects} = employee;
// console.log(firstName)
// let employee2 = {
//     firstName,
//     lastName,
//     email,
//     position,
//     startDate,
//     currentProject: projects.currentProject
// }
//
// import {randomNumber} from "./utils-module.js";
//
// let myNumber = randomNumber(1, 100);
// console.log(myNumber);

// can import the whole folder
// import * as utils from "./utils-module.js";
// let myNumber = utils.randomNumber(1, 100);
// console.log(myNumber);

// .Map .Filter .Reduce review. B/c I didnt show for the lesson.

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

const total = aHundredNums.reduce((accumulator, currentValue, index) => {
    console.log(`At ${index} the accumulator is ${accumulator} and the current value is ${currentValue}`)
    return accumulator + currentValue;
})
const average = aHundredNums.reduce((acc, curr, index, array) => {
    acc = acc + curr;
    if (index === array.length -1){
        return acc / array.length;
    } else {
        return acc;
    }
})

// .reduce is taking the values in the array at index [0] and [1]
// it loops through the array and combines the values
// if it was numbers it will add them all to one number if you tell it to do so.
// the acc will be the one added, current value will be added.
// common shorthand is acc and curr for accumulator and currentValue

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const totalMileage = cars.reduce((acc, car) => {
    return acc + car.mileage},
    0
    );
console.log(totalMileage);

const mileage = cars.reduce((acc, car) => {
    acc.push(car.mileage);
    return acc;
}, []);

const carMileageMax = cars.reduce((acc, car, index, array) => {
    if (index === array.length -1){
        acc.push(car.mileage);
        return acc.sort((a,b)=>b-a)[0];
    } else {
        acc.push(car.mileage);
        return acc;
    }
}, []);

const mileageReport = cars.reduce((acc, car, index, array) => {
    if (index === array.length -1){
        let report = 'The mileages are: ';
        report += acc.join(', ')
        const mileageSorted = acc.sort((a,b)=> b-a )[0];
        const highestMileage = mileageSorted[0];
        const lowestMileage = mileageSorted[mileageSorted.length -1];
        report = ".\n";
        report += "The highest miliage is: " + highestMileage + ".";
        report += "The lowest miliage is: " + lowestMileage + ".";
        return report;
    } else{
        acc.push(car.mileage);
        return acc;
    }
})