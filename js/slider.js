$(document).ready(function() {
  var sliderInner = $('.slider-inner');
  var slides = sliderInner.find('img');
  var slideWidth = sliderInner.width();
  var slideCount = slides.length;
  var currentSlide = 0;

  // Добавляем позиционирование абсолютное для изображений
  slides.css({
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'width': '100%',
    'height': '100%'
  });

  // Добавляем события для кнопок следующего и предыдущего слайда
  $('.slidernext').on('click', function() {
    switchSlide(currentSlide + 1);
  });

  $('.sliderprev').on('click', function() {
    switchSlide(currentSlide - 1);
  });

  // Функция для переключения слайда
  function switchSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }

    currentSlide = index;
    sliderInner.animate({
      'left': -index * slideWidth
    }, 500, function() {
      updateImages();
    });
  }

  // Функция для обновления изображений
  function updateImages() {
    slides.removeClass('active');
    slides.eq(currentSlide).addClass('active');
  }

  // Инициализируем слайдер
  updateImages();
});