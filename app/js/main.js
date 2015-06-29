$(function () {
  'use strict';

  var ymaps = window.ymaps;


  // Функция для изменения формата плейсхолдера кастомного селекта (для вывода флагов в селектах)

  function formatState(state) {
    if (!state.id) { return state.text; }
    var $state = $(
      '<span><i class="inline-icon icon-flag icon-flag-' + state.element.value.toLowerCase() + '"></i>' + state.text + '</span>'
    );
    return $state;
  }

  // Стилизация селектов на страницах

  $('select').not('[data-type="status"]').select2();
  $('select[data-type="status"]').select2({
    templateResult: formatState,
    templateSelection: formatState
  });

  // Модальные окна

  $('.js-show-modal').fancybox({
    type: 'ajax',
    margin: 10,
    autoResize: true,
    helpers: {
      overlay: {
        locked: false
      }
    },
    beforeShow: function () {
       $(this.skin).find('select').not('[data-type="status"]').select2();
       $(this.skin).find('select[data-type="status"]').select2({
         templateResult: formatState,
         templateSelection: formatState
       });
    }
  });

  $('.js-our-advantages-slider-nav a').on('click', function (event) {
    var index = $(this).attr('href').slice(1);
    event.preventDefault();
    $(this).closest('.js-our-advantages-slider-nav').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('.js-our-advantages-slider').flickity('select', index);
  });


  // Показать категории препаратов

  $('.js-show-items-toggle').on('click', function (event) {
    event.preventDefault();
    $('.category-row').removeClass('show-preparations-col');
    $(this).closest('.category-row').addClass('show-preparations-col');
  });

  // Слайдер дозировок препарата на странице "Препараты"

  $('.js-preparations-slider').flickity({
    cellAlign: 'left',
    draggable: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });

  $('.js-show-more-preparations-toggle').on('click', function (event) {
    event.preventDefault();
    $(this).prev('.js-preparations-slider').flickity('next', true);
  });


  // Инициализация карты на странице "Где купить"

  function initWhereToBuyMap() {
    var myMap = new ymaps.Map('whereToBuyMap', {
          center: [59.939095, 30.315868],
          zoom: 11,
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

  if (ymaps && $('#whereToBuyMap').length) {
    ymaps.ready(initWhereToBuyMap);
  }

});
