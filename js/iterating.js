(function(){
    "use strict";

    /**
     * TODO: also in class ex
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
 const names = ["Jason", "Javier", "Justin", "Jeremy", "Isaac"];
     */
let names = ["Dawson", "Chad", "Tommy", "Timmy"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
 console.log(`Number of elements in names => `, names.length)
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
    console.log(names[0]);
     console.log(names[1]);
     console.log(names[2]);
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("Now for a for loop");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
 for(let i = 0; i < names.length; i++){
 console.log(names[i]);
 }
     */
    for(let i = 0; i < names.length; i++) {
        let name = names[i];
        console.log(name)
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
 names.forEach(function(name){
 console.log(name);
 });
     */
    names.forEach(function(element, index){
        console.log("the element follows", element);
        console.log("the index follows", index);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
const returnFirst = (array) => {
    return array[0];
    }

const returnSecond = (array) => {
    return array[1];
}
    console.log(returnSecond(names))

const returnLast = (array) => {
    const arrayLength = array.length
    return array[arrayLength -1]
}
    console.log(returnLast(names));

})();