function init() {
	let map = new ymaps.Map('map', {
		center: [55.794093, 49.222426],
		zoom: 17
	});

  let Placemark = new ymaps.Placemark(map.getCenter(),
  {
    hintContent: 'ПРОМТЕХНОЛОГИИ И ОБОРУДОВАНИЕ',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/Logo_PIO.png',
    iconImageSize: [45, 45],
    iconImageOffset: [-18, -60]
  }
);

map.geoObjects.add(Placemark);

}

ymaps.ready(init);