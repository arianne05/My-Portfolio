function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = document.querySelector(".overlay2");
    let closeBtn = popupNode.querySelector(".close-btn");
    
    function openPopup() {
      popupNode.classList.add("active");
    }
    
    function closePopup() {
      popupNode.classList.remove("active");
    }
    
    document.querySelector("#openModalBtn5").addEventListener("click", function() {
      openPopup(); // Open the modal when the button is clicked
    });
    
    overlay.addEventListener("click", function(event) {
      if (event.target === overlay) {
        closePopup(); // Close the modal when the overlay is clicked
      }
    });
    
    closeBtn.addEventListener("click", closePopup); // Close on close button click
  }
  
  createPopup("#popup");
  