const swiperWomen = new Swiper('.swiper-women', {
    // Optional parameters
    direction: 'vertical',
    speed: 600,
    loop: true,
    auoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    slidesPerView: 2,
    spaceBetween: 10,

  });
  const swiperMen = new Swiper('.swiper-men', {
    // Optional parameters
    direction: 'vertical',
    speed: 600,
    loop: true,
    auoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: true
    },
    slidesPerView: 3,
    spaceBetween: 10,

  });
  const swiperNew = new Swiper('.swiper-new', {
    // Optional parameters
    direction: 'vertical',
    speed: 600,
    loop: true,
    auoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    slidesPerView: 2,
    spaceBetween: 10,

  });

  // toggle the banner width and enable the left movement 
  function toggleBanner() {
    const banner = document.querySelector('.banner');
    const header = document.querySelector('header');
    const bannerMiddle = document.querySelector('.banner-middle');
    const bannerRight = document.querySelector('.banner-right');
    banner.classList.toggle('active');
    header.classList.toggle('active');
    bannerMiddle.classList.toggle('active');
    bannerRight.classList.toggle('active');
  }

//toggle menu

function toggleMenu() {
  const navMobile = document.querySelector('.nav-mobile');
  const menu = document.querySelector('.menu');
  navMobile.classList.toggle('active');
  menu.classList.toggle('active');
}