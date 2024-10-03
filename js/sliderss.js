document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
    loop: false,
    autoplay: true,
    interval: 3000,
    swipe: true,
  });
});