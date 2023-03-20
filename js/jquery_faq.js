
let button = $('#button');
let $viz = $('dd');
let $highlight = $('dt');


    button.on('click', function(){
        $($viz).toggleClass('invisible');
    });

    $highlight.on('dblclick', function(){
           $(this).next().toggleClass('highlight')
    });

    $($highlight).on('click', function(){
       $(this).next().fadeToggle();
    });


