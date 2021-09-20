const slider = document.querySelector('.map-slider');
const slides = document.querySelectorAll(".slide-map-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector('.next');

const control = document.getElementById('map-slider-control');
const numberOfSlide = document.getElementById('map-slider-number');

const map = document.querySelector('.map');
const markers = document.querySelectorAll('.marker-container');

const watching = document.querySelector('.watching-online');

const imgs = document.querySelectorAll('.img');

let index = 1;
let animal;



nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
control.addEventListener('input', controlChose);
slider.addEventListener('click', (event) => {
 
  if (event.target.classList.contains('img')) {
    index = +(event.target.dataset.index);
    animal = event.target.getAttribute('alt');

    if (slides[index].classList.contains('active')) {
      return
    }
    linkMaker();
    controlSet();
    activeSlides(index);

  }

})

map.addEventListener('click', (event) => {
  if (event.target.classList.contains('mark')) {

    animal = event.target.getAttribute('alt');
    index = +(event.target.dataset.marker);

    if (slides[index].classList.contains('hidden')) {
      if (index < 3) {
        slides[0].classList.remove('hidden')
        slides[1].classList.remove('hidden')
        slides[2].classList.remove('hidden')
        slides[3].classList.remove('hidden')
        slides[4].classList.remove('hidden')
        slides[5].classList.add('hidden')
        slides[6].classList.add('hidden')
        slides[7].classList.add('hidden')
      }
      if (index > 5) {
        slides[0].classList.add('hidden')
        slides[1].classList.add('hidden')
        slides[2].classList.add('hidden')
        slides[3].classList.remove('hidden')
        slides[4].classList.remove('hidden')
        slides[5].classList.remove('hidden')
        slides[6].classList.remove('hidden')
        slides[7].classList.remove('hidden')
      }
    }

    linkMaker();
    controlSet();
    activeSlides(index);

  }
})

function linkMaker() {
  if (index >= 0 && index <= 3) {
    watching.setAttribute('href', `../zoos/${animal}.html`);
  } else {
    watching.setAttribute('href', '#');
  }
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
    slides[index].classList.remove('hidden');
    slides[index + 1].classList.remove('hidden');
    slides[index + 2].classList.remove('hidden');
    slides[index + 3].classList.remove('hidden');
    slides[index + 4].classList.remove('hidden');
    slides[index + 5].classList.add('hidden');
    slides[index + 6].classList.add('hidden');
    slides[index + 7].classList.add('hidden');
    activeSlides(index);
  } else {
    index += 1;
    if (slides[index].classList.contains('hidden')) {
      slides[index].classList.remove('hidden')
      slides[index - 5].classList.add('hidden');

    }
    activeSlides(index);
  }
  controlSet();

}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
    slides[index - 7].classList.add('hidden');
    slides[index - 6].classList.add('hidden');
    slides[index - 5].classList.add('hidden');
    slides[index - 4].classList.remove('hidden');
    slides[index - 3].classList.remove('hidden');
    slides[index - 2].classList.remove('hidden');
    slides[index - 1].classList.remove('hidden');
    slides[index].classList.remove('hidden');
    activeSlides(index);
  } else {
    index -= 1;
    if (slides[index].classList.contains('hidden')) {
      slides[index].classList.remove('hidden')
      slides[index + 5].classList.add('hidden');
    }
    activeSlides(index);
  }
  controlSet();

}

function activeSlides(index) {

  for (let slide of slides) {
    slide.classList.remove('active');
  }

  slides[index].classList.add('active');

  for(let mark of markers) {
    mark.querySelector('.marker-color').classList.remove('active');
  }

  if (index < markers.length) {
    markers[index].querySelector('.marker-color').classList.add('active');
  }

  if (index >= 0 && index <= 3) {
    animal = imgs[index].getAttribute('alt');
  }
  linkMaker();

}

function controlSet() {
  control.value = index + 1;
  numberOfSlide.innerHTML = `0${control.value}/`
}

function controlChose() {

  index = control.value - 1;
  numberOfSlide.innerHTML = `0${control.value}/`

  if (slides[index].classList.contains('hidden')) {

    if (index >= 4 && index <= slides.length) {
      slides[index].classList.remove('hidden');
      slides[index - 5].classList.add('hidden');
    }

    if (index >= 0 && index <= 4) {
      slides[index].classList.remove('hidden');
      slides[index + 5].classList.add('hidden');
    }

  }
  activeSlides(index);
}