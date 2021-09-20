let mainNav = document.querySelector(".main-nav");
let hamburger = document.querySelector(".menu-btn");
let cross = document.querySelector(".page-header__cross");
let hamImg = document.querySelector(".hamburger__img");

mainNav.classList.remove("main-nav--nojs");

if (mainNav.classList.contains("main-nav--nojs")) {
  hamImg.style.display = "none";
} else {
  hamImg.style.display = "inline-block";
}

hamburger.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});
