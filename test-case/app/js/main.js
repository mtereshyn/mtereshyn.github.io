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

let about = document.querySelector('.about');

let circle1 = document.querySelector('.first--dot');
let circle2 = document.querySelector('.second--dot');
let circle3 = document.querySelector('.third--dot');
let circle4 = document.querySelector('.foth--dot');

let wrapper1 = document.querySelector('.about-wrapper--first');
let wrapper2 = document.querySelector('.about-wrapper--second');
let wrapper3 = document.querySelector('.about-wrapper--third');
let wrapper4 = document.querySelector('.about-wrapper--foth');




circle1.addEventListener("click", function () {
  if(circle1.classList.contains("dot--noactive")) {
    wrapper2.classList.remove("wrapper--active");
    wrapper2.classList.add("wrapper--noactive");

    wrapper3.classList.remove("wrapper--active");
    wrapper3.classList.add("wrapper--noactive");

    wrapper4.classList.remove("wrapper--active");
    wrapper4.classList.add("wrapper--noactive");

    wrapper1.classList.add("wrapper--active");
    wrapper1.classList.remove("wrapper--noactive");

    about.style.backgroundColor = "#2eb398";
  }
  else {
    circle1.classList.add("dot--noactive");
    circle1.classList.remove("dot--active");
  }
});

circle2.addEventListener("click", function () {
  if(circle2.classList.contains("dot--noactive")) {
    wrapper1.classList.add("wrapper--noactive");
    wrapper1.classList.remove("wrapper--active");

    wrapper3.classList.add("wrapper--noactive");
    wrapper3.classList.remove("wrapper--active");

    wrapper4.classList.add("wrapper--noactive");
    wrapper4.classList.remove("wrapper--active");

    wrapper2.classList.add("wrapper--active");
    wrapper2.classList.remove("wrapper--noactive")

    about.style.backgroundColor = "#fff";
  }
  else {
    circle2.classList.add("dot--noactive");
    circle2.classList.remove("dot--active");
  }
});

circle3.addEventListener("click", function () {
  if(circle3.classList.contains("dot--noactive")) {
    wrapper1.classList.add("wrapper--noactive");
    wrapper1.classList.remove("wrapper--active");

    wrapper4.classList.add("wrapper--noactive");
    wrapper4.classList.remove("wrapper--active");

    wrapper2.classList.add("wrapper--noactive");
    wrapper2.classList.remove("wrapper--active")

    wrapper3.classList.add("wrapper--active");
    wrapper3.classList.remove("wrapper--noactive");

    about.style.backgroundColor = "#ee6557";
  }
  else {
    circle3.classList.add("dot--noactive");
    circle3.classList.remove("dot--active");
  }
});

circle4.addEventListener("click", function () {
  if(circle4.classList.contains("dot--noactive")) {

    wrapper1.classList.add("wrapper--noactive");
    wrapper1.classList.remove("wrapper--active");

    wrapper3.classList.add("wrapper--noactive");
    wrapper3.classList.remove("wrapper--active");

    wrapper2.classList.add("wrapper--noactive");
    wrapper2.classList.remove("wrapper--active")

    wrapper4.classList.add("wrapper--active");
    wrapper4.classList.remove("wrapper--noactive");

    about.style.backgroundColor = "#222222";
  }
  else {
    circle4.classList.add("dot--noactive");
    circle4.classList.remove("dot--active");
  }
});

