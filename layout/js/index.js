const container = document.querySelector(".slider__container");
const slider = document.querySelector(".header__slider");
const slides = document.querySelectorAll('.header__slider div');

const slideWidth = 373;
const gap = 20;
const slideStep = slideWidth + gap;

let currentPosition = 0;


const maxRight = 273;
const maxLeft = -273;

slider.addEventListener("wheel", (e) => {
    e.preventDefault();

    const speed = Math.abs(e.deltaY) / 3;
    const direction = e.deltaY > 0 ? 1 : -1;
    
    currentPosition += direction * speed;
    
    // Ограничиваем с двух сторон
    if (currentPosition > maxRight) currentPosition = maxRight;
    if (currentPosition < maxLeft) currentPosition = maxLeft;
    
    slider.style.transform = `translateX(calc(-50% + ${currentPosition}px))`;
});

// nextslider

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const carousel = document.querySelector(".what__carousel");


const currentPositionSlider = 0;
const step = 380;
let lastCurrent = 0;
const rightMax = 1200;
nextBtn.addEventListener("click", () => {
    lastCurrent = currentPosition
    currentPosition -= step;
    if(Math.abs(currentPosition) > rightMax) {
        currentPosition = -1200;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});
prevBtn.addEventListener("click", () => {
    currentPosition += step;
    if(currentPosition > 0) {
        currentPosition = 0;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});


