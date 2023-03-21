
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


let $list = $('li');
let $listButton = $('#yellow');
    $($listButton).on('click', function(){
      $($list).last().toggleClass('highlight');
    });


let $title = $('h3');
    $($title).on('click', function(){
        $(this).next().toggleClass('bold');
    });
    $($list).on('click', function(){
        $(this).parent().find('li:first').toggleClass('blue');
    });












