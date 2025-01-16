import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(){

  }

  ngOnInit() {
    const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slidesLength = slides.length;

let activeSlideIndex = 0;

const moveToSlide = (swap:any) => {
  if(sliderContainer){
  if (sliderContainer.classList.contains('slider-locked')) return;
  }
  activeSlideIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;

  if(sliderContainer){
  sliderContainer.classList.add('slider-locked');
  }

  slides.forEach((slide, index) => {
    slide.classList.toggle('scrolling_active', index === activeSlideIndex);
  });
}

const onTransitionEnd = () => {
  if(sliderContainer){
  sliderContainer.classList.remove('slider-locked');
  }
}

const onScroll = (event:any) => {
  event.preventDefault();
  const swap = Math.sign(event.deltaY);
  moveToSlide(swap);
}

document.addEventListener('wheel', onScroll);
if(sliderContainer){
sliderContainer.addEventListener('transitionend', onTransitionEnd);
}
}
}
