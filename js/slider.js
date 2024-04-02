"use strict";
//!  სლაიდერის ღილაკები
export function sliderFnc() {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
    pagination: false,
    autoplay: true,
    inerval: 2000,
  });
  splide.mount();
}

