
// .btn is the class inside the button. That is what's being found in the DOM, can also have button in replace of .btn
let clickMe = document.querySelector('.btn');
// using the ID =     let muButton = document.querySelector('#clickMe');

// getting the element with click me and will produce an array with all elements with that class name.
let myButton = document.getElementsByClassName('click me');

// will get all elements with a class of btn
let allButtons = document.querySelectorAll('.btn');

// will replace the text inside the element with this.
clickMe.innerText = "Hello World"

// will remove from the DOM and not show up on the page anymore
// clickMe.remove();

// targeting that class 'btn-column
let btnColumn = document.querySelector('#btn-column')

// inserts the text at the end of the parent element.
// let newHTML = '<p>New HTML Element</p>'
btnColumn.insertAdjacentHTML('beforeend', newHTML)

allButtons.forEach(function(button){
    button.style.backgroundColor = 'red';
});


// the event listener will listen for a trigger and do the function that follows.

let pageWrapper = document.querySelector('.page-wrapper')
clickMe.addEventListener('click', function(){
    pageWrapper.style.backgroundColor = 'red';
});
// to toggle the classs on and off on pager wrapper
clickMe.addEventListener('click', function(){
    pageWrapper.classList.toggle('red');
});

// dynamically adding elements onto the page. commonly used with API's


// creating nodes on the fly
let newHTML2 =
    <button class="btn" id="newButton">
        New Button
    </button>;
let buttonNode = document.createElement('button')
buttonNode.classList.add('btn');
buttonNode.innerText = 'I am a new button';
buttonNode.addEventListener('click', function(){
    alert('It works tiny dancer!');
});
btnColumn.appendChild(buttonNode);

btnColumn.innerHTML = '';
