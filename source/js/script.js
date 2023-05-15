const initNavigationMenu = () => {
  const navMain = document.querySelector('.main-navigation__list');
  const navToggle = document.querySelector('.main-navigation__toggle');

  if (!navToggle) {
    return;
  }

  navMain.classList.remove('main-navigation__list--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-navigation__list--close')) {
      navMain.classList.remove('main-navigation__list--close');
      navMain.classList.add('main-navigation__list--opened');
    } else {
      navMain.classList.add('main-navigation__list--close');
      navMain.classList.remove('main-navigation__list--opened');
    }
  });
};

const checkWebpFormat = () => {
  const webP = new Image();
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

  webP.onload = webP.onerror = () => {
    if (webP.height === 2) {
      document.body.classList.add("js-webp");
    } else {
      document.body.classList.add("js-webp-exception");
    }
  };
};

const initMap = () => {
  const searchMap = document.querySelector('.hotel-search__map');

  if (!searchMap) {
    return;
  }

  searchMap.classList.remove('map--nojs');

  ymaps.ready(init);
  var myMap,
  myPlacemark;

  function init(){
    myMap = new ymaps.Map(searchMap, {
      center: [34.869500, -111.760190],
      zoom: 7,
      controls: []
    },
    {suppressMapOpenBlock: true});

    myPlacemark = new ymaps.Placemark([34.869500, -111.760190], {
      hintContent: 'Ждем вас в Седоне!',
      balloonContent: ''
    }, {
          iconLayout: 'default#image',
          iconImageHref: './img/content-images/map-marker.svg',
          iconImageSize: [27, 27],
          iconImageOffset: [-10, -10]
        });
    myMap.geoObjects.add(myPlacemark);
  }
}

initNavigationMenu();
checkWebpFormat();
initMap();
