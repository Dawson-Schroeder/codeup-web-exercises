
// jQuery selector
let $jQueryParent = $('#paragraphParent')
// cannot do this below:
// jQueryParent.style.color = 'red';

// Vanilla Javascript equivalent
let vanillaParent = document.querySelector('#paragraphParent');

// //changing one css property
// $jQueryParent.css('color', 'red');
//
// // changing more than one css property
// $jQueryParent.css({
//     'fontWeight': '600',
//     'textTransform': 'uppercase',
//     'fontStyle': 'italic',
// });

// adding classes with jQuery
// $jQueryParent.addClass('highlight');

// getting more than one element, you can run the same methods
let $paragrapghs = $('p');
$paragrapghs.css('color', 'blue');

// vanilla javascript
let paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(element){
    element.style.color = 'blue';
    element.setAttribute('data-name', 'anything');
    let paragraphValue = element.getAttribute('data-name');
});

$paragrapghs.attr('data-name2', 'really anything');
let newParaValue = $paragrapghs.attr('data-name2');

$paragrapghs.text('This is the new text inside this element!');
let paraText = $paragrapghs.text();
console.log($paragrapghs)

// adding class to elements
$paragrapghs.addClass('highlight');

//removing a class from an element
$paragrapghs.removeClass('highlight');

$paragrapghs.on('click', function(){
    // $(this).toggleClass('highlight');
    $(this).fadeOut(1000, function(){
        $(this).fadeIn(1000);
    });
});




