$( function() {

  var headerWaypoint = $('.js-header-waypoint').waypoint({
    handler: function(direction) {
      $('.js-header').toggleClass('is-active');
    }
  });

  var collageWaypoint = $('.js-collage-waypoint').waypoint({
    handler: function(direction) {
      $('.js-collage').toggleClass('is-active');
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.collage__marker').click( function() {
    var marker = $(this);
    
    if ( marker.hasClass('hover') ) {
      marker.removeClass('hover');
    } else {
      $('.collage__marker').removeClass('hover');
      marker.addClass('hover');
    }
  });

});
