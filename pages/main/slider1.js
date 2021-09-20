const mainSlider = document.querySelector('.slider');
const mainSlides = document.querySelectorAll('.slide')

const textInSlide = document.querySelectorAll('.slide-text');
const btnsInSlide = document.querySelectorAll('.slide-btns');

const controlMain = document.getElementById('main-slider-control');
const numberOfSlideMain = document.getElementById('main-number-of-slide');

let mainIndex = +controlMain.value;


mainSlider.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('main-next')) {
    if (mainIndex <= 7) {
      nextMain()
    }
  }
  if (event.target.classList.contains('main-prev')) {
    prevMain();
  }
})


function nextMain() {
  flag = false;
  if (mainIndex < mainSlides.length - 1) {
    mainIndex += 1;
    console.log(mainIndex);
    mainActiveSlides(mainIndex);
    controlSetMain()
  }
}

function prevMain() {
  flag = false;
  if (mainIndex > 1) {
    mainIndex -= 1;
    console.log(mainIndex);
    mainActiveSlides(mainIndex);
    controlSetMain()
  }
}

function mainActiveSlides(ind) {

  for (let slide of mainSlides) {
    slide.classList.remove('active');
    slide.classList.add('minslide')
    slide.classList.remove('main-next');
    slide.classList.remove('main-prev');
    slide.classList.add('hid')
  }

  for (let text of textInSlide) {
   text.classList.add('hid');
  }

  for (let btn of btnsInSlide) {
   btn.classList.add('hid');
  }

  mainSlides[ind].classList.add('active');
  mainSlides[ind].classList.remove('minslide');
  mainSlides[ind].classList.remove('hid');
  textInSlide[ind].classList.remove('hid');
  btnsInSlide[ind].classList.remove('hid');
  
  if (ind >= 1) {
    mainSlides[ind - 1].classList.remove('hid');
    mainSlides[ind - 1].classList.add('main-prev');
  }
  
  if (ind <= 8) {
    mainSlides[ind + 1].classList.remove('hid');
    mainSlides[ind + 1].classList.add('main-next');
    mainSlides[ind + 2].classList.remove('hid');
    mainSlides[ind + 3].classList.remove('hid');
  }
}

// CONTROL

controlMain.addEventListener('input', controlChoseMain)

function controlChoseMain() {
  flag2 = false;
  mainIndex = +controlMain.value;
  numberOfSlideMain.innerHTML = `0${controlMain.value}/`
  mainActiveSlides(mainIndex);
}

function controlSetMain() {
  controlMain.value = mainIndex;
  numberOfSlideMain.innerHTML = `0${controlMain.value}/`
}