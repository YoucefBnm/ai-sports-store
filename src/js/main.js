const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 20,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  console.log('test')