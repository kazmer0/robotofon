import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fejlesztesek',
  templateUrl: './fejlesztesek.page.html',
  styleUrl: './fejlesztesek.page.scss'
})
export class FejlesztesekPage implements OnInit{
  constructor(){

  }

  ngOnInit() {
    const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
    const slides = document.querySelectorAll('.slide');
    const slidesLength = slides.length;

    let activeSlideIndex = 0;
    let touchStartY = 0; // X-coordinate at the start of the touch
    let touchEndY = 0;   // X-coordinate at the end of the touch

    // Move to the next or previous slide
    const moveToSlide = (swap: number) => {
      if (sliderContainer.classList.contains('slider-locked')) return; // Prevent overlapping animations

      // Update the active slide index (circular navigation)
      activeSlideIndex = (activeSlideIndex + swap + slidesLength) % slidesLength;

      sliderContainer.classList.add('slider-locked'); // Lock slider during transition

      // Update the active class for slides
      slides.forEach((slide, index) => {
        slide.classList.toggle('scrolling_active', index === activeSlideIndex);
      });
    };

    // Unlock the slider after the animation ends
    const onTransitionEnd = () => {
      sliderContainer.classList.remove('slider-locked');
    };

    // Handle mouse wheel events (desktop)
    const onScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scroll behavior
      const swap = Math.sign(event.deltaY); // Get the scroll direction (1 for down, -1 for up)
      moveToSlide(swap);
    };

    // Handle touch start (mobile)
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY; // Record the starting X position of the touch
    };

    // Handle touch move (mobile)
    const handleTouchMove = (event: TouchEvent) => {
      touchEndY = event.touches[0].clientY; // Update the current X position of the touch
    };

    // Handle touch end (mobile)
    const handleTouchEnd = (event: TouchEvent) => {
      const swipeDistance = touchEndY - touchStartY; // Calculate the swipe distance

      // Check if the swipe distance exceeds the threshold (e.g., 50px)
      if (Math.abs(swipeDistance) > 50) {
        const swap = swipeDistance > 0 ? -1 : 1; // Determine the swipe direction
        moveToSlide(swap);
      }

      // Reset touch positions
      touchStartY = 0;
      touchEndY = 0;
    };

    // Add event listeners
    document.addEventListener('wheel', onScroll as EventListener); // Mouse wheel support for desktop
    sliderContainer.addEventListener('touchstart', handleTouchStart as EventListener); // Touch start event
    sliderContainer.addEventListener('touchmove', handleTouchMove as EventListener);   // Touch move event
    sliderContainer.addEventListener('touchend', handleTouchEnd as EventListener);     // Touch end event
    sliderContainer.addEventListener('transitionend', onTransitionEnd as EventListener); // Unlock after transition


}

}
