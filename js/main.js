$(document).ready(function(){    
    $('.burger').click(function(event) {
        $('.menu_header').toggleClass('menu_header_active');     
        $('.burger').toggleClass('burger_active');     
        $('.body').toggleClass('body_lock');     
    });
})

function openAccordion() {
    let accordionButtons = document.querySelectorAll('.accordion__button');
    let accordionHeaders = document.querySelectorAll('.accordion__header');
    let accordionContents = document.querySelectorAll('.accordion__content');

    for (let i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].addEventListener('click', () => {
            accordionButtons[i].classList.toggle('accordion__button_active');
            accordionHeaders[i].classList.toggle('accordion__header_active');
            accordionContents[i].classList.toggle('accordion__content_active');
        });
    }
}

openAccordion();

