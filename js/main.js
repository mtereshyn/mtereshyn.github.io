let mainNav = document.querySelector(".main-header-nav");
let hamb = document.querySelector(".main-header--wrapper__toggle");

mainNav.classList.remove("main-header-nav--nojs");

hamb.addEventListener("click", function () {
  if (mainNav.classList.contains("main-header-nav--closed")) {
    mainNav.classList.remove("main-header-nav--closed");
    mainNav.classList.add("main-header-nav--opened");
  } else {
    mainNav.classList.add("main-header-nav--closed");
    mainNav.classList.remove("main-header-nav--opened");
  }
});

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}
function previousSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName(
    "projects--wrapper__slider--item"
  );

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
