const swiper = new Swiper('.swiper', {

  // slidesPerView: 1,
  //     spaceBetween: 10,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },

      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },

      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true, // توقف هنگام hover ماوس
        waitForTransition: true, // صبر کردن تا انتقال اسلاید کامل شود
        reverseDirection: false, // پخش معکوس
        stopOnLastSlide: false, // توقف روی آخرین اسلاید
        disableOnInteraction: true // غیرفعال شدن پس از تعامل کاربر
      },

      loop: true,
      freeMode: true,
      grabCursor: true,
      
});
