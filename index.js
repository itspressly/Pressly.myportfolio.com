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




// Add event listeners for showing and hiding the tooltip
document.getElementById('contactButton').addEventListener('mouseover', showTooltip);
document.getElementById('contactButton').addEventListener('mouseout', hideTooltip);

function showTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
}


document.addEventListener('DOMContentLoaded', () => {
  const raindropContainer = document.querySelector('.raindrops');
  for (let i = 0; i < 10; i++) {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindropContainer.appendChild(raindrop);
  }
});
