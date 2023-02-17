(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
let planetsArray = planetsString.split('|');
    console.log(planetsArray);
console.log(typeof(planetsArray));
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    /* in class
    let breakPlanets = planetsArray.join(`<br>`);
    console.log(breakPlanets);
     */
let myString = `Earth <br> Neptune <br> Venus`;
console.log(myString);
// it would be usefull to show where the string is going to the next line on the browser without having to actually look.

    let output =`<ul><li>Earth</li><li>Neptune</li><li>Venus</li></ul>`;

    let planetList = `<ul><li></li>${planetsArray.join(`</li><li>`)}</li></ul>`;

})();
