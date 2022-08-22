const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 20,
    breakpoints: {
      
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  const swiperGallery = new Swiper(".mySwiper-gallery", {
    
    breakpoints: {
      
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    },
    
    
  });
