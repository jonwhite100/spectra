(function($) {
    'use strict'; // Start of use strict



      $("#primary-nav").load("primary-nav.html");
      $("#footer-v6").load("footer.html");

      function activeNav() {
          var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
           $("#primary-nav ul li a").each(function(){
                if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
                $(this).addClass("active");
           });
      }

      setTimeout(function() {
          activeNav();
      }, 100);


});
