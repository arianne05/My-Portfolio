// JavaScript function to open a specific tab
function openTab(tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  tabButtons = document.getElementsByClassName("tab-button");

  // Hide all tab content
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove the "active" class from all tab buttons
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Show the clicked tab content and mark the button as active
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Show the modal when needed (e.g., a button click)
function openModal() {
  var modal = document.querySelector(".modal");
  modal.style.display = "block";
}

// Close the modal
function closeModal() {
  var modal = document.querySelector(".modal");
  modal.style.display = "none";
}
