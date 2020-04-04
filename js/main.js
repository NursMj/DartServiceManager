$(document).ready(function(){    
    $('.burger').click(function(event) {
        $('.menu_header').toggleClass('menu_header_active');     
        $('.burger').toggleClass('burger_active');     
        $('.body').toggleClass('body_lock');     
    });
    $('.review-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        prevArrow: '<button class="review-slider__button review-slider__button_up"></button>',
        nextArrow: '<button class="review-slider__button review-slider__button_down"></button>',
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="review-slider__button review-slider__button_up"></button>',
                    nextArrow: '<button class="review-slider__button review-slider__button_down"></button>',
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="review-slider__button review-slider__button_up"></button>',
                    nextArrow: '<button class="review-slider__button review-slider__button_down"></button>',
                    slidesToScroll: 1
                }
            }
        ]
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

function runTeamSlider() {
    let screenWidth = screen.width;
    if (screenWidth < 576) {
        $(document).ready(function(){    
            $('.team-slider').slick({
                infinite: true,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            prevArrow: '<button class="button team-slider__button team-slider__button_left"></button>',
                            nextArrow: '<button class="button team-slider__button team-slider__button_right"></button>',
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        })
    } else {
        showTeamMember();
    }
}

function showTeamMember () { 
    let teamSliderItems = document.querySelectorAll('.team-slider__item');
    let teamSliderPhotos = document.querySelectorAll('.team-slider__photo');

    for (let i = 0; i < teamSliderItems.length; i++) {
        teamSliderPhotos[i].addEventListener('click', () => {
            let currentItem = document.querySelector('.team-slider__item_active');
            teamSliderItems[i].classList.toggle('team-slider__item_active');
            currentItem.classList.toggle('team-slider__item_active');
        });
    }
}

runTeamSlider();