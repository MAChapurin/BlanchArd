const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  });

  const swiperGalery = new Swiper('.galery__swiper', {
    // Optional parameters
    direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 3,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          441: {
            slidesPerView: 2,
            spaceBetween: 38
          },
          1120: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        keyboard: {
            enabled: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 1,
        },

      },
  });

  const swiperEvents = new Swiper('.events__swiper', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
        spaceBetween: 34
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 27
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
  })

  const swiperProjects = new Swiper('.projects__swiper', {
    direction: 'horizontal',
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 5000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
  })
