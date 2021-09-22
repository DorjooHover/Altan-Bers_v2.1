
const swiper = new Swiper('.swiper_header', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 4000,
    },
  });

  const swiper1 = new Swiper('.swiper_about_area_bottom', {
    direction:'horizontal',
    loop:true,
    autoplay: {
      delay:5000,
    },
    mousewheel: true,
    
    slidesPerview: 1,
  })
  const swiper2 = new Swiper('.swiper_product', {
    direction: 'horizontal',
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  const swiper3 = new Swiper('.swiper_right_slide', {
    direction:'vertical',
    loop:true,
    autoplay:{
      delay:4000,
    },
  })