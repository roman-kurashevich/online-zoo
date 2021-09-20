const carousel = document.getElementById("carousel");
const content = document.getElementById("countent");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slides = document.querySelectorAll(".slide-second");
const control = document.getElementById("slider-control");
const numberOfSlide = document.getElementById("number-of-slide");


let index = 0;

control.addEventListener('input', controlChose)

function controlChose() {
  index = control.value * 4 - 4;
  activeSlides(index);
  numberOfSlide.innerHTML = `0${control.value}/`
}

function controlSet() {
  control.value = index / 4 + 1;
  numberOfSlide.innerHTML = `0${control.value}/`
}

function nextSlide() {
  if (index == slides.length - 4) {
    index = 0;
    activeSlides(index);
  } else {
    index += 4;
    activeSlides(index);
  }
  controlSet()
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 4;
    activeSlides(index);
  } else {
    index -= 4;
    activeSlides(index);
  }
  controlSet()
}

function activeSlides(index) {
  for (let slide of slides) {
    slide.classList.add('hidden');
  }
  slides[index].classList.remove('hidden');
  slides[index + 1].classList.remove('hidden');
  slides[index + 2].classList.remove('hidden');
  slides[index + 3].classList.remove('hidden');
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);