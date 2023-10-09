/* Show modal */
function showImageModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("fullImage");
  modal.style.display = "block";
  modalImg.src = img.src;

  // Add a click event listener to the modal overlay
  modal.addEventListener("click", function(event) {
      if (event.target === modal) {
          closeImageModal(); // Close the modal if the click occurred outside the content
      }
  });
}

/* Close modal */
function closeImageModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close the modal when the close button is clicked
var closeButton = document.querySelector(".closeImage");
closeButton.addEventListener("click", closeImageModal);
