$(document).ready(function() {
  let slider = $('.slider');
  let sliderInner = slider.find('.slider-inner');
  let prevButton = slider.find('.sliderprev');
  let nextButton = slider.find('.slidernext');
  let imgWidth = sliderInner.find('img').width();
  let numImages = sliderInner.find('img').length;
  let currentImage = 0;


prevButton.on('click', function() {
  event.preventDefault(); // Добавьте эту строку
  currentImage--;
  if (currentImage < 0) {
    currentImage = numImages - 1;
  }
  sliderInner.animate({
    left: -currentImage * imgWidth
  }, 500);
});

nextButton.on('click', function() {
  event.preventDefault(); // Добавьте эту строку
  currentImage++;
  if (currentImage >= numImages) {
    currentImage = 0;
  }
  sliderInner.animate({
    left: -currentImage * imgWidth
  }, 500);
});
});