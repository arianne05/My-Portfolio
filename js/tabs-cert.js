const itemCerts = document.querySelectorAll('.item-cert');
const itemContents = document.querySelectorAll('.first-cert-sec');

itemCerts.forEach((itemCert, index) => {
    itemCert.addEventListener('click', () => {
        // Hide all item contents
        itemContents.forEach((itemContent) => {
            itemContent.classList.remove('active');
        });

        // Show the corresponding item content
        const tabId = itemCert.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');
    });
});