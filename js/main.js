$(document).ready(function(){    
    $('.burger').click(function(event) {
        $('.menu_header').toggleClass('menu_header_active');     
        $('.burger').toggleClass('burger_active');     
        $('.body').toggleClass('body_lock');     
    });
})
