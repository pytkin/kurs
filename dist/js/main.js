$(function(){"use strict";$("select").select2(),$(".js-our-advantages-slider-nav a").on("click",function(e){var s=$(this).attr("href").slice(1);e.preventDefault(),$(this).closest(".js-our-advantages-slider-nav").find("li").removeClass("active"),$(this).closest("li").addClass("active"),$(".js-our-advantages-slider").flickity("select",s)}),$(".js-show-items-toggle").on("click",function(e){e.preventDefault(),$(".category-row").removeClass("show-preparates-col"),$(this).closest(".category-row").addClass("show-preparates-col")}),$(".js-preparates-slider").flickity({cellAlign:"left",draggable:!1,wrapAround:!0,prevNextButtons:!1,pageDots:!1}),$(".js-show-more-preparates-toggle").on("click",function(e){e.preventDefault(),$(this).prev(".js-preparates-slider").flickity("next",!0)})});