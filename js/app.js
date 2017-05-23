$(document).ready(function() {
  var height = $(window).height();
  $('nav').attr("data-offset-top", height);
  $(window).scroll(function() {
    var height = $(window).height();
    $('nav').attr("data-offset-top", height);
  });
  Map();

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  let stagesDes = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda possimus, quas, provident debitis excepturi.",
    "Ii dolor sit amet, consectetur adipisicing elit. Assumenda possimus, quas, provident debitis excepturi",
    "Sit amet, consectetur adipisicing elit. Assumenda possimus, quas, provident debitis excepturi",
    "Lello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda possimus, quas, provident debitis excepturi"
  ];

  $(".search").hover(
    function() {
      $(".ser").css("opacity", 1);
    },
    function() {
      $(".ser").css("opacity", 0);
    }
  );
  $(".execute").hover(
    function() {
      $(".exc").css("opacity", 1);
    },
    function() {
      $(".exc").css("opacity", 0);
    }
  );

  $(".cd").hover(function() {
    $("#stg-des").removeClass("text-right").addClass("text-left").text(stagesDes[0]);
  }, function() {
    $("#stg-des").text("");
  });
  $(".cv").hover(function() {
    $("#stg-des").removeClass("text-right").addClass("text-left").text(stagesDes[1]);
  }, function() {
    $("#stg-des").text("");
  });
  $(".cc").hover(function() {
    $("#stg-des").removeClass("text-left").addClass("text-right").text(stagesDes[2]);
  }, function() {
    $("#stg-des").text("");
  });
  $(".cb").hover(function() {
    $("#stg-des").removeClass("text-left").addClass("text-right").text(stagesDes[0]);
  }, function() {
    $("#stg-des").text("");
  });

  $('.psf').hover(
    function(){
      $('#psf').removeClass("fill-white").addClass("fill-red");
      $('#ladder1').removeClass("fill-white").addClass("fill-red");
    },
    function(){
      $('#psf').removeClass("fill-red").addClass("fill-white");
      $('#ladder1').removeClass("fill-red").addClass("fill-white");
    }
  );
  $('.pmf').hover(
    function(){
      $('#pmf').removeClass("fill-white").addClass("fill-red");
      $('#ladder2').removeClass("fill-white").addClass("fill-red");
    },
    function(){
      $('#pmf').removeClass("fill-red").addClass("fill-white");
      $('#ladder2').removeClass("fill-red").addClass("fill-white");
    }
  );
  $('.bmf').hover(
    function(){
      $('#bmf').removeClass("fill-white").addClass("fill-red");
      $('#ladder3').removeClass("fill-white").addClass("fill-red");
    },
    function(){
      $('#bmf').removeClass("fill-red").addClass("fill-white");
      $('#ladder3').removeClass("fill-red").addClass("fill-white");
    }
  );

  var Elixeur = (function ($) {

      var init = function () {
            // contact functionality
          if (typeof Contact !== 'undefined')
              Contact.init();
      };
      return {
          init: init
      };

  }(jQuery));

  $(function () {
      Elixeur.init();
  });

});
