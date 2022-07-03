//ScrollReveal().reveal('*', { delay: 25 });

var listMenu = $('.m-menu');
var menuLink = $('.d-menu__link');

$(document).ready(function() {
    menuLink.click(function () {
        menuLink.removeClass("d-menu__link--active");
        $(this).addClass("d-menu__link--active");   
    });
});


$(function(){
    $('.d-menu__toggle').click(function(){
        
        listMenu.css("top","0");
    })
})

$(function(){
    $('.m-menu__close').click(function(){
        listMenu.css("top","-150%"); 
    })
})

      
//var scroll_start = 0;
var header = $('.header');
$(document).scroll(function() { 
    var scroll_start = $(this).scrollTop();
    if(scroll_start) {
        header.addClass('header--scroll')
    }else {
        header.removeClass('header--scroll')
    }
});
 


