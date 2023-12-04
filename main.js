const swiper = new Swiper('.swiper', 
{
    // Optional parameters
    // direction: 'vertical',
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  