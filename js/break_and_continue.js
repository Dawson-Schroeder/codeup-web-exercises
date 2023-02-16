"use strict";
let userInput = parseInt(prompt("Please enter an odd number between 1 and 50"))
while(userInput % 2 === 0) {
    alert(`Not an odd number, please enter an odd number.`);
    userInput = parseInt(prompt("Please enter an odd number between 1 and 50"))
}

for (let i = 1; i <= 50; i++){
    if( i == userInput){
        console.log(`Yikes! Skipping number: ${i}`)
    } else if( i % 2 === 1) {
        console.log(`Here is an odd number: ${i}`);
    }
}

/* in class
let userPrompt;
let userPromptNum;
while(true){
    userPrompt = prompt(`Please enter a number between 1 and 50.`);
    userPromptNum = parseInt(userPrompt);
    if(userPrompt % 2 === 1 && userPromptNum >= 1 && userPromptNum <=50){
    break;
    }
}
for(let i = 1; i<= 49; i += 2){
    if(i === userPromptNum){
    console.log(`Yikes! skipping number: ${i}`);
    continue;
    }
    console.log(`Here is an odd number: ${i}`);
}
 */