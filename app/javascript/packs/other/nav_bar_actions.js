var $home = $('#button-home');

$home.click(function() {
  //do something
});

$( 'li span' ).on( 'click', function () {
  $( 'li span' ).find( 'span.active' ).removeClass( 'active' );
  $( this ).parent( 'span' ).addClass( 'active' );
});