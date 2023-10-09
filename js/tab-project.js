const imgPrevCons = document.querySelectorAll('.img-prev-con');
const textSecs = document.querySelectorAll('.tab-project-route');

imgPrevCons.forEach((imgPrevCon) => {
    imgPrevCon.addEventListener('click', () => {
        // Hide all text sections
        textSecs.forEach((textSec) => {
            textSec.classList.remove('active');
        });

        // Show the corresponding text section
        const tabId = imgPrevCon.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');
    });
});
