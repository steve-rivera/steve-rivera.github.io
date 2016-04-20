$(function () {


  // Blog Admin Slider
  var blogAdminBullets = document.getElementById('blog-admin-slider-position').getElementsByTagName('li');
  var blogAdminSlider = Swipe(document.getElementById('blog-admin-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = blogAdminBullets.length;
      while (i--) { blogAdminBullets[i].className = ''; }
      blogAdminBullets[pos].className = 'is-active';
    }
  });

  $('.js-blog-admin-slider-left').click( function() { blogAdminSlider.prev(); });
  $('.js-blog-admin-slider-right').click( function() { blogAdminSlider.next(); });



  // Blog Site Slider
  var blogSiteBullets = document.getElementById('blog-site-slider-position').getElementsByTagName('li');
  var blogSiteSlider = Swipe(document.getElementById('blog-site-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = blogSiteBullets.length;
      while (i--) { blogSiteBullets[i].className = ''; }
      blogSiteBullets[pos].className = 'is-active';
    }
  });

  $('.js-blog-site-slider-left').click( function() { blogSiteSlider.prev(); });
  $('.js-blog-site-slider-right').click( function() { blogSiteSlider.next(); });



  // LevelUp App Slider
  var appBullets = document.getElementById('levelup-app-slider-position').getElementsByTagName('li');
  var levelupAppSlider = Swipe(document.getElementById('levelup-app-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = appBullets.length;
      while (i--) { appBullets[i].className = ''; }
      appBullets[pos].className = 'is-active';
    }
  });

  $('.js-levelup-app-slider-left').click( function() { levelupAppSlider.prev(); });
  $('.js-levelup-app-slider-right').click( function() { levelupAppSlider.next(); });



  // LevelUp Dashboard Slider
/*  var dashboardBullets = document.getElementById('levelup-dashboard-slider-position').getElementsByTagName('li');
  var levelupDashboardSlider = Swipe(document.getElementById('levelup-dashboard-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = dashboardBullets.length;
      while (i--) { dashboardBullets[i].className = ''; }
      dashboardBullets[pos].className = 'is-active';
    }
  });

  $('.js-levelup-dashboard-slider-left').click( function() { levelupDashboardSlider.prev(); });
  $('.js-levelup-dashboard-slider-right').click( function() { levelupDashboardSlider.next(); });*/



  // LevelUp Docs Slider
  var docsBullets = document.getElementById('levelup-docs-slider-position').getElementsByTagName('li');
  var levelupDocsSlider = Swipe(document.getElementById('levelup-docs-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = docsBullets.length;
      while (i--) { docsBullets[i].className = ''; }
      docsBullets[pos].className = 'is-active';
    }
  });

  $('.js-levelup-docs-slider-left').click( function() { levelupDocsSlider.prev(); });
  $('.js-levelup-docs-slider-right').click( function() { levelupDocsSlider.next(); });



  // LevelUp Email Slider
  var emailBullets = document.getElementById('levelup-email-slider-position').getElementsByTagName('li');
  var levelupEmailSlider = Swipe(document.getElementById('levelup-email-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = emailBullets.length;
      while (i--) { emailBullets[i].className = ''; }
      emailBullets[pos].className = 'is-active';
    }
  });

  $('.js-levelup-email-slider-left').click( function() { levelupEmailSlider.prev(); });
  $('.js-levelup-email-slider-right').click( function() { levelupEmailSlider.next(); });



  // LevelUp Print Slider
  var printBullets = document.getElementById('levelup-print-slider-position').getElementsByTagName('li');
  var levelupPrintSlider = Swipe(document.getElementById('levelup-print-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = printBullets.length;
      while (i--) { printBullets[i].className = ''; }
      printBullets[pos].className = 'is-active';
    }
  });

  $('.js-levelup-print-slider-left').click( function() { levelupPrintSlider.prev(); });
  $('.js-levelup-print-slider-right').click( function() { levelupPrintSlider.next(); });



  // LevelUp Site Slider
  var siteBullets = document.getElementById('levelup-site-slider-position').getElementsByTagName('li');
  var levelupSiteSlider = Swipe(document.getElementById('levelup-site-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = siteBullets.length;
      while (i--) { siteBullets[i].className = ''; }
      siteBullets[pos].className = 'is-active';
    }
  });

  $('.js-levelup-site-slider-left').click( function() { levelupSiteSlider.prev(); });
  $('.js-levelup-site-slider-right').click( function() { levelupSiteSlider.next(); });



  // Orion Site Slider
  var orionSiteBullets = document.getElementById('orion-site-slider-position').getElementsByTagName('li');
  var orionSiteSlider = Swipe(document.getElementById('orion-site-slider'), {
    continuous: true,
    callback: function(pos) {
      var i = orionSiteBullets.length;
      while (i--) { orionSiteBullets[i].className = ''; }
      orionSiteBullets[pos].className = 'is-active';
    }
  });

  $('.js-orion-site-slider-left').click( function() { orionSiteSlider.prev(); });
  $('.js-orion-site-slider-right').click( function() { orionSiteSlider.next(); });
});