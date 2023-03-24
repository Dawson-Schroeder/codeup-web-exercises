/* IntelliJ Shortcuts
-- CMD + CTRL + G = places a cursor at every occurence of the selected tool.
-- option + shift + G = places a cursor at each line of the selected block of code.
-- when linking sheets, use   ../   to go back a folder.
 */


// any country currency function
function formatToLocaleString(number, language=`en`, country=`US`, currency=`USD`){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}
// isNumericAndNotNaN2 allows you to pass a string number and convert it to a number
function isNumericOrNumericString(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean";
}

function evenOrOdd(number){
    return number % 2 === 0 ? number +"is an even number" : number + "is an odd number";
}

function randomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
}


function arrayOfRandomNumbers(lengthOfArray){
    let array = [];
    for (let i = 0; i < lengthOfArray; i++){
        let newRandomNumber = randomNumber(1, lengthOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1 , lengthOfArray + 100);
        }
        array.push(randomNumber(1, 100));
    }
    return array;
}

function fastestPalindrome(str){
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}

// use for all dropdown menus
let pageWrapper = document.querySelector('.page-wrapper');

let dropdowns = document.querySelectorAll('[data-dropdown="parent"]');
dropdowns.forEach(function(dropdown){
    let toggle = dropdown.querySelector('[data-dropdown="toggle"]');
    toggle.addEventListener('click', function(){
        dropdowns.forEach(function(element){
            if(element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open')
            }
        })
        dropdown.classList.toggle('open');
    });
});
pageWrapper.addEventListener('click', function(event){
    if (!event.target.closest('[data-dropdown="parent"]')) {
        dropdowns.forEach(function(dropdown){
            dropdown.classList.remove('open');
        });
    }
})
// end dropdown JS


// weatherMap tools
function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}

function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function formatTime(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    let seconds = appendLeadingZeroes(dateTime.getSeconds());
    return month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
}

function dateFromTimeStamp(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = appendLeadingZeroes(dateTime.getMonth() + 1);
    let day = dateTime.getDate();
    return `${year}-${month}-${day}`;
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const daysOfWeekAbbreviated = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function namedDayFromDay(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeek[dateTime.getDay()];
}

function dayOfWeekFromDayAbbreviated(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeekAbbreviated[dateTime.getDay()];
}

function mostFrequent(array){
    const arrayElementsCount = array.reduce(function(total, element){
        if (!total[element]) {
            total[element] = 1;
        } else {
            total[element] = total[element] + 1;
        }
        return total;
    }, {});
    const arraySorted = Object.entries(arrayElementsCount).sort(function(a, b){
        return b[1] - a[1];
    });
    return arraySorted[0][0];
}

function average(array){
    let total = 0;
    array.forEach((element, index, array)=>total+=element);
    return total/array.length;
}
// end weatherMap tools