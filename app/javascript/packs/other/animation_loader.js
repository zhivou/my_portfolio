var $window = $(window);
var $elem = $(".animation")

function isScrolledIntoView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(document).on("scroll", function () {
  if (isScrolledIntoView($elem, $window)) {
    $elem.addClass("animate")
    console.log("now you see me");
  }
});