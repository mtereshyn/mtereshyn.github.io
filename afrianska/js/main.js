let mainNav = document.querySelector(".main-header-nav");
let hamb = document.querySelector(".main-header--block--toggle");

mainNav.classList.remove("main-header-nav--nojs");

hamb.addEventListener("click", function() {
  if(mainNav.classList.contains("main-header-nav--closed")) {
    mainNav.classList.remove("main-header-nav--closed");
    mainNav.classList.add("main-header-nav--opened");
  } else {
    mainNav.classList.add("main-header-nav--closed");
    mainNav.classList.remove("main-header-nav--opened");
  }
});