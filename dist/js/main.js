$(function(){"use strict";function e(e){if(!e.id)return e.text;var t=$('<span><i class="inline-icon icon-flag icon-flag-'+e.element.value.toLowerCase()+'"></i>'+e.text+"</span>");return t}function t(){var e=new a.Map("whereToBuyMap",{center:[59.939095,30.315868],zoom:11,controls:[]}),t=new a.Placemark(e.getCenter(),{},{iconLayout:"default#image",iconImageHref:"img/map-marker.png",iconImageSize:[28,39],iconImageOffset:[-14,-38]});e.geoObjects.add(t)}var a=window.ymaps;$("select").not('[data-type="status"]').select2(),$('select[data-type="status"]').select2({templateResult:e,templateSelection:e}),$(".js-show-modal").fancybox({type:"ajax",margin:10,autoResize:!0,helpers:{overlay:{locked:!1}},beforeShow:function(){$(this.skin).find("select").not('[data-type="status"]').select2(),$(this.skin).find('select[data-type="status"]').select2({templateResult:e,templateSelection:e})}}),$(".js-our-advantages-slider-nav a").on("click",function(e){var t=$(this).attr("href").slice(1);e.preventDefault(),$(this).closest(".js-our-advantages-slider-nav").find("li").removeClass("active"),$(this).closest("li").addClass("active"),$(".js-our-advantages-slider").flickity("select",t)}),$(".js-show-items-toggle").on("click",function(e){e.preventDefault(),$(".category-row").removeClass("show-preparates-col"),$(this).closest(".category-row").addClass("show-preparates-col")}),$(".js-preparates-slider").flickity({cellAlign:"left",draggable:!1,wrapAround:!0,prevNextButtons:!1,pageDots:!1}),$(".js-show-more-preparates-toggle").on("click",function(e){e.preventDefault(),$(this).prev(".js-preparates-slider").flickity("next",!0)}),a&&$("#whereToBuyMap").length&&a.ready(t)});