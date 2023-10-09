  /* Show modal */
  function showProjectModal(img) {
    var modal = document.getElementById("imageProject");
    var modalImg = document.getElementById("fullImageProject");
    modal.style.display = "block";
    modalImg.src = img.src;
}

/* Close modal */
function closeProjectModal() {
    var modal = document.getElementById("imageProject");
    modal.style.display = "none";
}