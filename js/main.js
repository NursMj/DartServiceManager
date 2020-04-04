$(document).ready(function(){    
    $('.burger').click(function(event) {
        $('.menu_header').toggleClass('menu_header_active');     
        $('.burger').toggleClass('burger_active');     
        $('.body').toggleClass('body_lock');     
    });
})

function openAccordion() {
    let accordionItems = document.querySelectorAll('.accordion__item');
    let accordionButtons = document.querySelectorAll('.accordion__button');
    let accordionHeaders = document.querySelectorAll('.accordion__header');
    let accordionContents = document.querySelectorAll('.accordion__content');

    for (let i = 0; i < accordionButtons.length; i++) {
        accordionHeaders[i].addEventListener('click', () => {
            accordionItems[i].classList.toggle('accordion__item_active');
            accordionButtons[i].classList.toggle('accordion__button_active');
            accordionHeaders[i].classList.toggle('accordion__header_active');
            accordionContents[i].classList.toggle('accordion__content_active');
        });
    }
}

openAccordion();

/* function showTeamMember () { 
    let teamSliderItems = document.querySelectorAll('.team-slider__item');
    let teamSliderPhotos = document.querySelectorAll('.team-slider__photo');

    for (let i = 0; i < teamSliderItems.length; i++) {
        let currentItem = document.querySelector('.team-slider__item_active');
        teamSliderPhotos[i].addEventListener('click', () => {
            teamSliderItems[i].classList.toggle('team-slider__item_active');
            currentItem.classList.toggle('team-slider__item_active');
        });
    }
}

showTeamMember();
 */