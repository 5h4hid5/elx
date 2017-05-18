$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - $('nav').height();
      if ($(window).scrollTop() > navHeight) {
        $('nav').addClass('navbar-fixed-top');
      }
      else {
        $('nav').removeClass('navbar-fixed-top');
      }
   });


   Map();

 });
