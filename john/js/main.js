let mainNav = document.querySelector(".main-header-nav");
let hamburger = document.querySelector(".main-header--wrapper--toggle");

mainNav.classList.remove("main-header-nav--nojs");

hamburger.addEventListener("click", function() {
  if(mainNav.classList.contains("main-header-nav--closed")) {
    mainNav.classList.remove("main-header-nav--closed");
    mainNav.classList.add("main-header-nav--opened");
  } else {
    mainNav.classList.add('main-header-nav--closed');
    mainNav.classList.remove("main-header-nav--opened");
  }
});