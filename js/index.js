$(document).ready(function(){
    $('.reviews__list').slick({
        autoplay: true,
        autoplaySpeed: 6000,
    });

    $(".button").click(function() { 
        $('html, body').animate({
        scrollTop: $(".order-form").offset().top 
        }, 1000); 
    });

    $(".button").on("tap",function() { 
        $('html, body').animate({
        scrollTop: $(".order-form").offset().top 
        }, 1000); 
    });
   
});
