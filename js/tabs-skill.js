
  // Get all tabs and tab contents
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  // Function to show a specific tab content by its data-tab attribute
  function showTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    // Show the specified tab content
    document.getElementById(tabId).style.display = 'block';
  }

  // Add click event listeners to each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Get the data-tab attribute value of the clicked tab
      const tabId = tab.getAttribute('data-tab');

      // Show the corresponding tab content
      showTab(tabId);
    });
  });

  // Initially, show the "Program Language" tab
  showTab('language');

