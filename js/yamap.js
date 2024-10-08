// let center = [55.746405, 49.250701];

function init() {
	let map = new ymaps.Map('map', {
		center: [55.794093, 49.222426],
		zoom: 17
	});

  let Placemark = new ymaps.Placemark(map.getCenter(),
  {
    hintContent: 'ПРОМТЕХНОЛОГИИ И ОБОРУДОВАНИЕ',
    balloonContent: 'Это красивая метка'
  },
  {
    // balloonContentHeader: 'Заголовок 1',
    // balloonContentBody: 'Основной текст',
    // balloonContentFooter: 'Подвал',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/Logo_PIO.png',
    iconImageSize: [30, 30],
    iconImageOffset: [-10, -10]
  }
);

map.geoObjects.add(Placemark);

}

ymaps.ready(init);