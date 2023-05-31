import getProducts from './products.js';
import { sliderScrollLeft, sliderScrollRight } from './slider.js';

/* SLider Start */
const fLeftBtn = document.querySelector('.f-left-btn');
const fRightBtn = document.querySelector('.f-right-btn');
const mLeftBtn = document.querySelector('.m-left-btn');
const mRightBtn = document.querySelector('.m-right-btn');
const sliderContainer1 = document.querySelector('.slider-container1');
const sliderContainer2 = document.querySelector('.slider-container2');

fLeftBtn.addEventListener('click', () => {
  sliderScrollLeft(sliderContainer1);
});

fRightBtn.addEventListener('click', () => {
  sliderScrollRight(sliderContainer1);
});

mLeftBtn.addEventListener('click', () => {
  sliderScrollLeft(sliderContainer2);
});

mRightBtn.addEventListener('click', () => {
  sliderScrollRight(sliderContainer2);
});
/* SLider End */

getProducts();
