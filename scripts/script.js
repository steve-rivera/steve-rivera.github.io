$(function () {

  $('.js-nav-waypoint').waypoint( function() {
    if (window.innerWidth > 620) {
      $('nav').toggleClass('is-visible');
    }
  });

  $('.mobile-menu').click( function() {
    if (window.innerWidth < 620) {
      $('nav').toggleClass('is-visible');
    }
  });

  $('.content').click( function() {
    if (window.innerWidth < 620) {
      $('nav').removeClass('is-visible');
    }
  });

  $('.js-portfolio-waypoint').waypoint( function(direction) {
    if (direction == 'down') {
      activateLink($(this).data('portfolio'));
    }
  }, { offset: 200 });

  $('.js-portfolio-waypoint').waypoint( function(direction) {
    if (direction == 'up') {
      activateLink($(this).data('portfolio'));
    }
  }, { offset: function() {
    return -$(this).height() + 150;
  } });

  $('.js-nav-link').click( function() {
    scrollToPortfolio($(this).data('link'));

    if (window.innerWidth < 620) {
      $('nav').toggleClass('is-visible');
    }
  });

  $('.js-top-mobile').click( function() {
    $('body').animate({
      scrollTop: 0
    }, 1000);

    if (window.innerWidth < 620) {
      $('nav').toggleClass('is-visible');
    }
  });

  var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
  var android = ( navigator.userAgent.match(/Android/i) ? true: false );

  if (iOS) {
    $('.js-download-android').css('display', 'none');
  }

  if (android) {
    $('.js-download-ios').css('display', 'none');
  }

  function activateLink(link) {
    $('.js-nav-link').removeClass('is-active');
    $('.js-nav-link[data-link="' + link + '"]').addClass('is-active');
  };

  function scrollToPortfolio(portfolio) {
    scrollTo = $('.js-portfolio-waypoint[data-portfolio="' + portfolio + '"]');

    $('body, html').animate({
      scrollTop: scrollTo.offset().top - 120
    }, 1000);
  };

});