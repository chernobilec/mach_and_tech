let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex=n);
}

function showSlides(n) {
  let i;
  let slides=document.getElementsByClassName("desc__slide");
  let dots=document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex=1
  }

  if (n < 1) {
    slideIndex=slides.length
  }

  for (i=0; i < slides.length; i++) {
    slides[i].style.display="none";
  }

  for (i=0; i < dots.length; i++) {
    dots[i].className=dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className+=" active";
}

// Добавление обработчиков событий для свайпа
let startX;

const sliderContainer=document.querySelector('.desc__slider');

sliderContainer.addEventListener('touchstart', (event)=> {
    startX=event.touches[0].clientX; // Сохраните начальную позицию касания
  }

);

sliderContainer.addEventListener('touchmove', (event)=> {
    // Здесь можно добавить дополнительную логику, если необходимо
  }

);

sliderContainer.addEventListener('touchend', (event)=> {
    const endX=event.changedTouches[0].clientX; // Получите конечную позицию касания
    handleSwipe(startX, endX);
  }

);

function handleSwipe(startX, endX) {
  if (startX > endX + 50) {
    plusSlides(1);
    // Свайп влево 
  }

  else if (startX < endX - 50) {
    plusSlides(-1);
    // Свайп вправо plusSlides(1);
  }
}

function plusSlides(n) {
  showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex=n);
}

function showSlides(n) {
  let i;
  let slides=document.getElementsByClassName("desc__slide");
  let dots=document.getElementsByClassName("demo");
  let captionText=document.getElementById("caption");

  if (n > slides.length) {
    slideIndex=1;
  }

  if (n < 1) {
    slideIndex=slides.length;
  }

  for (i=0; i < slides.length; i++) {
    slides[i].style.display="none";
  }

  for (i=0; i < dots.length; i++) {
    dots[i].className=dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display="block";
  dots[slideIndex - 1].className+=" active";

  if (captionText) {
    captionText.innerHTML=dots[slideIndex - 1].alt;
  }
}