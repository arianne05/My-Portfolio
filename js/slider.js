const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(index) {
    const slideWidthPercentage = 100 / slides.length; // Divide by the total number of images
    const translateXValue = `-${index * slideWidthPercentage}%`;
    slider.style.transform = `translateX(${translateXValue})`;
}

setInterval(nextSlide, 3000);