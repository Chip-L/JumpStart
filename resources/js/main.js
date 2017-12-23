$(document).ready( function () {
  var $carousel = $('.carousel');
  var $topNavbar = $('#topNavbar');
  var scrollDist = 0;

  initCarousel($carousel);
  $(window).scroll(function () {
    var $scrollTop = $(this).scrollTop();

    if(($scrollTop - scrollDist) > 50) {
      var $navbarHeight = $topNavbar.css('height');
      $topNavbar.animate({
        top: "-" + $navbarHeight
      }, 150);
      scrollDist = $scrollTop;
    } else if ((scrollDist - $scrollTop) > 50) {
      $topNavbar.animate({
        top: 0
      }, 150);
      scrollDist = $scrollTop;      
    };

  });
});

function initCarousel($element) {
  $element.slick({
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
}
