var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    // we can use loop or not 
    // loop: true,
    // auto play as your wise
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });