(function ($) {

    // Navigation scrolls
    $(".navbar-nav li a").on('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        }
    });

    // Add smooth scrolling to all links in navbar
    $("a.mouse-hover, a.get-quote").on('click', function(event) {
      var hash = this.hash;
      if( hash ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, 'easeInOutExpo');
      }
    });
})(jQuery);

/**********************************************/


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});
