const mainVideo = document.querySelector('.video iframe');
const slider = document.querySelector('.preview-container');
const slide = document.querySelector('.preview');

slider.addEventListener('click', (event) => {
  console.log('rrrrrrrrr')
  console.log(event.target)
  let tmp = event.target.previousElementSibling.getAttribute('src');
  console.log(tmp);
  let tmpMain = mainVideo.getAttribute('src');
  console.log(tmpMain);

  event.target.previousElementSibling.setAttribute('src', tmpMain);
  mainVideo.setAttribute('src', tmp);
})