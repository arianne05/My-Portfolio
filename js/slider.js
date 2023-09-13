const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('img');
    let slideIndex = 0;

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex, slider);
    }

    function showSlide(index, slider) {
        const slideWidthPercentage = 100 / slides.length;
        const translateXValue = `-${index * slideWidthPercentage}%`;
        slider.style.transform = `translateX(${translateXValue})`;
    }

    setInterval(nextSlide, 2500);
});
