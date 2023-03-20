"use strict";
let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
let current = 0;

let keyHandler = $(document).keyup(function(event){
    console.log(event.keyCode);
    if (pattern.indexOf(event.key) < 0  || event.key !== pattern[current]){
        current = 0;
        return;
    }
    current++;
    if(pattern.length === current){
        current = 0;
        alert('You have added 30 lives!');
        $('#page-wrapper').css('backgroundColor', 'rgba(22, 33, 22, 0.81)');
        $('#duckboi').append('<img class="datboi" src="../images/dancing-duck-danse.gif">');
        $('#title').css('fontFamily', 'Metal Mania');
        $('#title').css('fontSize', '48px');
        $('#left-column').append('<img class="flame" src="../images/flames.gif">');
        $('#right-column').append('<img class="flame" src="../images/flames.gif">');

    }
});

document.addEventListener('keydown', keyHandler, false);


