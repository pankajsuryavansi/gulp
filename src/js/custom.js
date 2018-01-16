$(document).ready(function(){
    // new WOW().init();

 



    $('.home-slider').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:5000,
        items: 1,
        nav:false,
        dots:false,
           navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
    });

     // if ($(window).width() <= 767) {
     //        $('.collapse').collapse("hide");
     //        $(".taber").attr("data-toggle", "collapse");

     //    } else {
     //        $('.collapse').collapse("show");
           

     //    }

        var $myGroup1 = $('#footer-accordion');
$myGroup1.on('show.bs.collapse','.collapse', function() {
    $myGroup1.find('.collapse.in').collapse('hide');
});

$('.taber').click(function() {
    $('.taber').removeClass('active');
    
    //If the panel was open and would be closed by this click, do not active it
    if(!$(this).closest('.panel-collapse').hasClass('in')){
      $(this).removeClass('active').addClass('active');
    }
        
 });

   


});

