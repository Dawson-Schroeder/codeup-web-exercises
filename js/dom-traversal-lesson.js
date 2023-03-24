

$('.box').on('click', function(){
   $(this)
       .parents('.container')
       .siblings('.container')
       .find('.box')
       .fadeToggle();
});

// crawling up the DOM
$('#box1').parents('.container');
$('#box1').closest('.container');
document.querySelector('#box1').closest('.column')



// crawling down the DOM
$('#box1').find();
$('#box1').children();

// crawling latitude (x axis)
$('#box1').siblings();

// utility methods
$('#box1').closest();