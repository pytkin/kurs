$(function () {
  'use strict';

  var ymaps = window.ymaps;

  // Инициализация карты на странице "Где купить"

  function initWhereToBuyMap(id) {
    var myMap = new ymaps.Map(id, {
          center: [59.874277, 30.386359],
          zoom: 15,
          controls: []
        });
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.png',
          iconImageSize: [28, 39],
          iconImageOffset: [-14, -38]
        });

    myMap.geoObjects.add(myPlacemark);
  }

  if (ymaps) {
    ymaps.ready(function () {
      initWhereToBuyMap('whereToTakeMap01');
      initWhereToBuyMap('whereToTakeMap02');
      initWhereToBuyMap('whereToTakeMap03');
      initWhereToBuyMap('whereToTakeMap04');
    });
  }

});
