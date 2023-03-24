(function(){
    "use strict";

    const planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
let addingSun = planets.unshift('The Sun');
let indexOfSun = planets.indexOf("Sun")
    console.log(addingSun);
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
let addingPluto = planets.push("Pluto");
let indexOfPluto = planets.indexOf("Pluto" + 1);
    console.log(addingPluto);
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    let removeSun = planets.splice(indexOfSun, 1);
    console.log(removeSun);
    console.log(planets);
    //planets.shift();

    console.log('Removing "Pluto" from the end of the planets array.');
let removePluto = planets.splice(indexOfPluto, 1);
    console.log(removePluto);
    console.log(planets);
    //planets.pop();

    console.log('Finding and logging the index of "Earth" in the planets array.');
let indexOfEarth = planets.indexOf('Earth');
    console.log(indexOfEarth);

    console.log("Reversing the order of the planets array.");
let reverseOrder = planets.reverse();
    console.log(reverseOrder);

    console.log("Sorting the planets array.");
let sortPlanets = planets.sort();
    console.log(sortPlanets);
})();