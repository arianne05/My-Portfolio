  /* Show modal */
  function showImageModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("fullImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

/* Close modal */
function closeImageModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}