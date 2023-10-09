const imgPrevCons = document.querySelectorAll('.img-prev-con');
const textSecs = document.querySelectorAll('.tab-project-route');
const headerImgs = document.querySelectorAll('.header-img');

imgPrevCons.forEach((imgPrevCon) => {
    imgPrevCon.addEventListener('click', () => {
        // Hide all text sections and header images
        textSecs.forEach((textSec) => {
            textSec.classList.remove('active');
        });

        headerImgs.forEach((headerImg) => {
            headerImg.classList.remove('active');
        });

        // Show the corresponding text section
        const tabId = imgPrevCon.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');

        // Show the corresponding header image
        const headerImgId = `header-${tabId}`;
        const headerImg = document.getElementById(headerImgId);
        if (headerImg) {
            headerImg.classList.add('active');
        }
    });
});
