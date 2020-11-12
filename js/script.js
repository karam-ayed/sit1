/*global $, */
$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 500
    });
      // show color option on click
    $('.gear-check').click(function () {
        $('.option-box .color-option').toggle(1000);
    });
    
    var colorLi = $('.color-option ul li');
    colorLi
        .eq(0).css('backgroundColor', '#e41b17').end()
        .eq(1).css('backgroundColor', '#e426d5').end()
        .eq(2).css('backgroundColor', '#009aff').end()
        .eq(3).css('backgroundColor', '#fff400');

    colorLi.click(function () {
        $("link[href*='seeam']").attr("href", $(this).attr('data-value'));
    });
});
//loading screen
//$(window).load(function () {
//    'use strict';
//    //$("body").css("overflow", "auto");
//    $('.loading-overlay').fadeOut(1000);
//});
$(window).load(function () {
    'use strict';

    $(".loading-overlay h1").fadeOut(1000, function () {
        $(this).parent().fadeOut(2000);
    }
                                    );
});

