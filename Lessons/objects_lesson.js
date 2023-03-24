"use Strict";

// this is an object literal
const currentWeather = {
    temperature: 54.4,
    humidity: 28,
    clouds: 0,
    windDirection: "NNE"
}
// Key Value pairs (K,V) EX: temperature = key, 54.4 = value

// to access object properties, use DOT notation
// console.log(currentWeather.temperature);

function displayWeatherProperty(prop){
    // console.log(currentWeather[prop]);
}

// console.log(currentWeather.clouds);

// if I need to use a variable to access an object property I can use bracket notation.
let weatherProperty = "clouds";
// console.log(currentWeather["clouds"]);
// console.log(currentWeather[weatherProperty]);
// EX:
// console.log(`The current weather is ${currentWeather.temperature}`);

if (currentWeather.temperature < 80){
    // console.log("It is cold!!");
} else {
    // console.log("Ahhh nice and warm");
}
// EX but in C
// console.log(`The current weather is ${((currentWeather.temperature - 32) * 5 / 9).toFixed(1)} degrees Celcius`);

if (currentWeather.temperature < 80){
    // console.log("It is cold!!");
} else {
    // console.log("Ahhh nice and warm");
}


// I can use a for in loop to loop through an objects properties to get their keys.
// property = key

currentWeather.temperature = 63.7
/* delete currentWeather.humidity; */
// I can create new properties
currentWeather.rain = false;

//I can use a for in loop to loop through an objects properties, getting their keys.
for (let property in currentWeather){
    // console.log(property + ": " + currentWeather[property]);
}

const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

hourlyWeather.forEach(hourlyForecast => {console.log(`At ${hourlyForecast.time}: 
The temperature will be ${hourlyForecast.temperature} degree's`)}
);

// object destructuring : deconstruct the object in the parameter of the forEach loop
hourlyWeather.forEach(({time, temperature}) =>
console.log(`At ${time} the temperature will be ${temperature}`));

// I can use a for loop
for (let i = 0; i < hourlyWeather.length; i++){
    console.log(hourlyWeather[i].temperature);
}

// for ...of loop (if you don't need an index it's a better way to use a for each) loop through an array.
for (const forecast of hourlyWeather){
    console.log(forecast.temperature);
}

// you can loop over a string with a for ... of
// const myString = "supercalifragilisticexpialodocious";
// for (const letter of myString) console.log(letter);

// ::METHODS::
const fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8,
}
const fighter2 = {
    name: "Bigfoot",
    hitPoints: 17,
    maxDamage: 10,
}
const monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6,
}

const controller = {
    attack: function(attacker, defender){
        const startingHp = defender.hitPoints;
        const damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker.name, defender.name, startingHp, defender.hitPoints, damage);

    }
}

const view = {
    displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage){
        console.log(`${defenderName} has ${hpBeforeAttack} hit points.`);
        console.log(`${attackerName} attacks!`);
        console.log(`${attackerName} does ${damage} hit points`);
        console.log(`${defenderName} now has ${hpAfterAttack} hit points left!`)
    }
}

// ====== constructor function =======

function Goblin(name, hitPoints, maxDamage){
    this.name = name;
    this.hitPoints = 8;
    this.maxDamage = 6;
}
let goblins = [];
    goblins = new Goblin("goblin 1");
    goblins = new Goblin("goblin 2");
    goblins = new Goblin("goblin 3");

 goblins.forEach(function(goblin){
     console.log(" This is the " + (index + 1) + " loop");
     console.log(goblin.name);
     console.log(goblin.hitPoints);
 })



