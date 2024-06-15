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


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Construct the mailto link
  const mailtoLink = `mailto:presslyzungunde96@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

  // Open the mail client with the constructed link
  window.location.href = mailtoLink;
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // These IDs from the previous steps
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
          alert('Message sent successfully!');
      }, function(error) {
          alert('Failed to send message. Error: ' + JSON.stringify(error));
      });
});
