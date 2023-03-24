jQuery("h3").click(function(){
   $(this).next().slideToggle(500);jQuery("h3").click(function(){
      $(this).next().slideToggle(500);
   });

});

// arrow function below:
// jQuery("h3").click((event)=>{
//    $(event.target).next().slideToggle(500);
// });

// we can use the $ as shorthand for calling jquery function
// $("h3").click(function(){
//    $(this).next().slideToggle(500);
// });

// If we ask our javascript to access DOM elements but those elements have not loaded yet,
//then our Javascript cant access them. We can get around this by asking our
//javascript to wait until the page has loaded.

//we can do this with the vanilla JS window.onload event.
// function init(){
//    $("h3").click(function(){
//       $(this).next().slideToggle(500);
//    });
// }
// window.onload = init;
// or we can do the $document).ready   can be used like an iffee, you can wrap your page
// $(document).ready(function(){
//
// });



                                 // exercise = //
   $(document).ready(function(){
      alert("DOM has finished loading")
   });


// jQuery selectors can use css selectors syntax
// getting a referecne to to the element with the ID of library
// using a jquery selector
// storing it in a variable
// Use the $ to mark this as a reference to a jQuery object
   const $libraryReference = $("#library")
   let libraryText = $libraryReference.text();
   console.log(libraryText);
   $libraryReference.text(`${libraryText} is library`);
   console.log($libraryReference.text());

// using jQuery class selector with the .css method to change the css of the elected elements
//    $(".framework").css('border', '1px dashed black');
   $(".framework").css({
      'border': '1px solid black',
      'width': 'fit-content',
      'padding': '4px',
      'border-radius': '5px',
      'margin-bottom': '3px'
   });


   $("p, li").text("jQuery takes over").css("color", "hotpink");
