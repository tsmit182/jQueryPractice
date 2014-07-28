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

// $(document).ready(function(){
    $('#ball').click(function(){
    // 	console.log('clicked the ball!');
    // })
		$(this).toggle('bounce'//, {times:3});
	)});
    //     $(this).effect('bounce', {times:3}, 500);
    // });
// });


$('#sel').last().addClass( "selected" );




