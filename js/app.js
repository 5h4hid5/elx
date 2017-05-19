$(document).ready(function() {
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - $('nav').height();
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('navbar-fixed-top');
    } else {
      $('nav').removeClass('navbar-fixed-top');
    }
  });
  Map();
  $("#open-form").click(function(e) {
    e.preventDefault();
    console.log("Hello");
    $("#form-container").css("display","flex");
  });
  $(".close-btn").click(function(e) {
    e.preventDefault();
    $("#form-container").css("display","none");
  });
});
