// ABOUT__SLIDER ABOUT__SLIDER ABOUT__SLIDER ABOUT__SLIDER
const aboutPrevBtn = document.querySelector(".left__pagination");
const aboutNextBtn = document.querySelector(".right__pagination");
const aboutCarousel = document.querySelector(".sponsor__carousel");

let aboutPosition = 0;
let aboutStep = 300;


aboutPrevBtn.addEventListener("click", () => {
    aboutPosition += aboutStep;
    if(aboutPosition>0) {
        aboutPosition = 0
    }
    aboutCarousel.style.transform = `translateX(${aboutPosition}px)`;
});
aboutNextBtn.addEventListener("click", () => {
    aboutPosition -= aboutStep;
    if(aboutPosition < -606) {
        aboutPosition = -606;
    }
    aboutCarousel.style.transform = `translateX(${aboutPosition}px)`;
});

