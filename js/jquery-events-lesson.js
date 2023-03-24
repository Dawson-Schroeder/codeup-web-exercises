
// in regular JS
document.querySelector("#clickMe").addEventListener('click', function(){
   alert('Hello Again..')
});

// jQuery way to do it
$('#clickMe').click(() => alert("Hello, Once Again..."));

$('.box').hover(function(){
   $(this).css('background-color', '#62412a');
},
    function(){
   $(this).css('background-color', 'antiquewhite');
    }
);

$('#create-an-element').click(function(){
    $(this).after("<button class='clickMe dynamic'>Click Me</button>");
});

$('#new-element').on('click', '.dynamic', function(){
    alert("you clicked me")
});

// document.querySelector('#new-elements').addEventListener('click', function(event){
//    if(event.target ===)
// });