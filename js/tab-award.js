document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs-main-item');
    const tabContents = document.querySelectorAll('.tabs-content-award'); // Make sure the class name matches

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabData = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            document.querySelector(`[data-content="${tabData}"]`).classList.add('active');
        });
    });
});
