import {getCharacter, getPlanet, getEyeColor, getMovie} from "./promises-api-2-practice.js";
/*
    TODO: Using seperation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the star wars api: https://swapi.dev/
        -returns a specific planet
        -returns the eye color of a specific character
        -returns all of the data on a specific movie
        *bonus* - Add the data to the DOM however you want
 */

(async()=>{

    let character = await getCharacter(69);
    console.log(character);

    let planet = await getPlanet();
    console.log(planet);

    let eyeColor = await getEyeColor(69);
    console.log(eyeColor);

    let movieData = await getMovie(1);
    console.log(movieData);

})();


