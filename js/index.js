$(document).ready(function(){
    $('.reviews__list').slick({
        autoplay: true,
        autoplaySpeed: 6000,
    });
    $(".button").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".order-form").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
    $(".button").on("tap",function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".order-form").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
   
});
