$(document).ready(function(){
  var swiper1 = new Swiper('.main__swiper', {
    pagination: {
      el: '.main__pagination',
      clickable: true
    }
  });

  var swiper2 = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews-arrows__next',
      prevEl: '.reviews-arrows__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1025: {
        slidesPerView: 3
      },
      1920: {
        slidesPerView: 3
      }
    }
  });

  $( "#accordion" ).accordion({
    collapsible: true,
    active : 'none'
  });

  $( function() {
    $( "#tabs-steps" ).tabs();
  } );

  $(".header__burger").on('click', function(){
    $(this).toggleClass("is-cross");
    $(".header__menu").toggleClass("is-active");
  });
});
