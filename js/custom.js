(function ($) {
    'use strict';

    jQuery(document).ready(function () {
 
	
		   
    /* ----------------------------------------------------------- */
  /*  Header
  /* ----------------------------------------------------------- */

   $(function(){
      
      $('a.page-scroll').bind('click', function(event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -62
         }, 800, 'easeInOutExpo');
         event.preventDefault();
      });
      $('body').scrollspy({ target: '#header', offset:72 });
   });

   if (window.location.hash){
     $('html, body').stop().animate({
      scrollTop: $(window.location.hash).offset().top -62
    }, 800, 'easeInOutExpo');
   }




   /* ----------------------------------------------------------- */
   /*  Fixed header
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function(){

        if( $(window).scrollTop()>100 ){

        $('.header').addClass('header-solid animated fadeInDown');
        } 
        else {

        $('.header').removeClass('header-solid animated fadeInDown');

        }

    }); 

   $(window).on('scroll', function(){

        if( $(window).scrollTop()>200 ){

        $('.header2').addClass('header-bgnone animated fadeInDown');
        } 
        else {

        $('.header2').removeClass('header-bgnone animated fadeInDown');

        }

    }); 
	
	 

  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

   $('#main-slide').carousel({
      pause: true,
      interval: 10000,
   });

   
   
    /* ----------------------------------------------------------- */
   /*  Counter
   /* ----------------------------------------------------------- */

      $('.counter').counterUp({
       delay: 10,
       time: 1000
      });

 
   /* ----------------------------------------------------------- */
   /*  Flex slider
   /* ----------------------------------------------------------- */

      //Second item slider
      $(window).load(function() {
        $('.flexSlideshow').flexslider({
           animation: "fade",
           controlNav: false,
           directionNav: true ,
           slideshowSpeed: 8000
        });
      });


     //Portfolio item slider
      $(window).load(function() {
        $('.flexportfolio').flexslider({
           animation: "fade",
           controlNav: false,
           directionNav: true ,
           slideshowSpeed: 8000
        });
      });

     
   /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        //Wow
        new WOW().init();


		
		
	
    //Default Template
    $("span.color_default").on('click', function(){
        $("body").removeAttr("class");
    });
    //Peter River Color Template
    $("span.color_yellow").on('click', function(){
        $("body").addClass("color_yellow").removeClass("color_green color_red color_blue color_offblue");
    });
    //Emerald Color Template
    $("span.color_green").on('click', function(){
        $("body").addClass("color_green").removeClass("color_yellow color_red color_blue color_offblue");
    });
     //Alizarin Color Template
    $("span.color_red").on('click', function(){
        $("body").addClass("color_red").removeClass("color_yellow color_green color_blue color_offblue");
    });
     //Amethyst Color Template
    $("span.color_blue").on('click', function(){
        $("body").addClass("color_blue").removeClass("color_yellow color_green color_offblue color_red");
    });
     //Amethyst Color Template
    $("span.color_offblue").on('click', function(){
        $("body").addClass("color_offblue").removeClass("color_yellow color_green color_blue color_red");
    });

    $(".pnale_button").on('click',  function(event){
        event.preventDefault();
        if ( $(this).hasClass(".button_inOut") ) {
            $(".color_pnnel_box").stop().animate({left:"-150px"}, 500);
        } else {
            $(".color_pnnel_box").stop().animate({left:"0px"}, 500);
        }
        $(this).toggleClass(".button_inOut");
        return false;
    });	
		
		
   /* ----------------------------------------------------------- */
   /*  Prettyphoto
   /* ----------------------------------------------------------- */

      $("a[data-rel^='prettyPhoto']").prettyPhoto();
 
 
	//Testimonial

    $("#testimonial-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 600,
      pagination:true,
      singleItem:true
 
    });
	
	 /* Typed subtitle */
    $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 5000,
        typeSpeed: 0,
        loop: true
    });
   
 
	  $('#slippry-slider').slippry({ 
			transition: 'vertical',
			useCSS: true,
			speed: 5000,
			pause: 3000,
			initSingle: false,
			auto: true,
			preload: 'visible',
			pager: false,		
		} 
	  
	  );
	 
	   
  });

})(jQuery);