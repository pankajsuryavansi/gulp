$(function() {
    $('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});


// sticky header
function stickyHeader () {
    if ($('.stricky').length) {
        var strickyScrollPos = 40;
        if($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
            $('.scroll-to-top').fadeIn(500);
        }
        else if($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {   
    (function ($) {
        stickyHeader();
    })(jQuery);
});



$(document).ready(function () {
    // scroll to top function
    $(".scroll-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });
});
});

