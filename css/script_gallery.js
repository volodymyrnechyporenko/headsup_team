const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  freeMode: false,
  preventInteractionOnTransition: false,

  autoplay: {
    delay: 10600,
    stopOnLastSlide: true,
    disableOnInteraction: false
  },

  effect: 'fade',

});