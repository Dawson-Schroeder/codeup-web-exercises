$('h1').click(function() {
    $(this).css('color', 'red')});

$('p').dblclick(function() {
    $(this).css('font-size', '18px')});

$('li').hover(function(){
        $(this).css('color', 'red');
    },
    function(){
        $(this).css('color', 'black');
    }
);
