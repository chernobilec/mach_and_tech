let menuBtn = document.querySelector('.header__wrapper--ham');
let menu = document.querySelector('.ham--menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}
)