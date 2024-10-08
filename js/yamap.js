let center = [55.746405, 49.250701];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});

  let Placemark = new ymaps.Placemark(center,
  {
    hintContent: 'ПРОМТЕХНОЛОГИИ И ОБОРУДОВАНИЕ'
  },
  {
    // balloonContentHeader: 'Заголовок 1',
    // balloonContentBody: 'Основной текст',
    // balloonContentFooter: 'Подвал',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/128/1201/1201684.png',
    iconImageSize: [128, 128],
    iconImageOffset: [0, 0]
  }
);

map.geoObjects.add(Placemark);

}

ymaps.ready(init);