'use strict';
const pageWrapper = document.querySelector('.main-page-wrapper');
const sliderControls = pageWrapper.querySelector('.slider-controls');
const sliderButtons = sliderControls.querySelectorAll('button');
const slides = pageWrapper.querySelectorAll(`.slider-item`);

let currentSlide = 0;

for (let i = 0;  i < slides.length; i++ ) {
  if (slides[i].classList.contains(`slide-current`)) {
    currentSlide = i;
  }
}

for (let j = 0;  j < sliderButtons.length; j++ ) {
  sliderButtons[j].classList.remove(`current`);
  console.log(sliderButtons[j]);
}

sliderButtons[currentSlide].classList.add(`current`)

const sliderControlsHandler = (evt) => {
  sliderButtons[currentSlide].classList.remove(`current`);
  slides[currentSlide].classList.remove(`slide-current`);
  pageWrapper.classList.remove(`page-wrapper-${currentSlide + 1}`);

  currentSlide = evt.target.dataset.slide - 1;

  sliderButtons[currentSlide].classList.add(`current`);
  slides[currentSlide].classList.add(`slide-current`);
  pageWrapper.classList.add(`page-wrapper-${currentSlide + 1}`);
}

sliderControls.addEventListener(`click`, sliderControlsHandler);
