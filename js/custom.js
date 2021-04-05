$(document).ready(function () {

  // Scroll to top
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $('.sticky-top');

    if (scrolling >= 200) {
      sticky.addClass('nav_bg');
    } else {
      sticky.removeClass('nav_bg')
    }
  });

  // Smooth Scrolling
  $('body').scrollspy({
    target: ".navbar",
    offset: 110
  });
  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 100
        }, 1500);
        return false;
      }
    }
  });

  // Slick slider
  $('.blog_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    nextArrow: '.right_arrow',
    prevArrow: '.left_arrow',
  });
  // Preloader js
  $(window).on('load', function () {

    $('.preloader').delay(500).fadeOut(500);


  });
  // video box

  $('.venobox').venobox({
    framewidth: '100%',
    frameheight: '800px',
    spinner: 'three-bounce',
  });
});
