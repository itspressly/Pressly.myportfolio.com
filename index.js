function toggleTextVisibility() {
  const textElement = document.getElementById('my-text');
  if (textElement.style.display === 'none') {
    textElement.style.display = 'block';
  } else {
    textElement.style.display = 'none';
  }
}


document.addEventListener("DOMContentLoaded", function() {
  // Function to show and hide the popup
  function showPopup() {
      const popup = document.getElementById('popup');
      popup.style.display = 'block';
      setTimeout(function() {
          popup.style.display = 'none';
      }, 50000); // Display for 50 seconds
  }

  // Show the popup only on mobile devices
  if (window.innerWidth <= 768) {
      showPopup();
  }
});
