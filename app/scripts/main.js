$('#clickAlert').click(function( event ) {
  alert( 'Totally got you to click me.' ); // "hey "
});

// $( "#other" ).click(function() {
//   $( "#target" ).keydown();
// });

$( "#checkMetaKey" ).click(function( event ) {
  $( "#display" ).text( event.metaKey );
});


$(document).ready(function() {
    $('#somethingHere').fadeOut(10000);
     $('#fader').mouseenter(function() {
        	$(this).fadeTo('fast',.1);
    });
});


$('#sel').last().addClass( "selected" );

