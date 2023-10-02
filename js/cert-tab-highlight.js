document.addEventListener("DOMContentLoaded", function () {
    const itemCerts = document.querySelectorAll('.item-cert');

    itemCerts.forEach((itemCert) => {
        itemCert.addEventListener('click', () => {
            // Remove 'active' class from all item-cert elements
            itemCerts.forEach((item) => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked item-cert element
            itemCert.classList.add('active');
        });
    });
});
