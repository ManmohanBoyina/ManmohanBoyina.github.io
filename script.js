function togglemenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  // Toggle the menu visibility
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}


document.addEventListener('DOMContentLoaded', () => {
  const experienceContainer = document.getElementById('experience-container');
  const additionalExperienceDetails = document.getElementById('additional-details');

  const educationContainer = document.getElementById('education-container');
  const additionalEducationDetails = document.getElementById('education-details');

  // Toggle for Experience Container
  experienceContainer.addEventListener('click', () => {
      if (additionalExperienceDetails.style.display === 'none' || additionalExperienceDetails.style.display === '') {
          additionalExperienceDetails.style.display = 'block';
      } else {
          additionalExperienceDetails.style.display = 'none';
      }
  });

  // Toggle for Education Container
  educationContainer.addEventListener('click', () => {
      if (additionalEducationDetails.style.display === 'none' || additionalEducationDetails.style.display === '') {
          additionalEducationDetails.style.display = 'block';
      } else {
          additionalEducationDetails.style.display = 'none';
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const text = "Full Stack Developer";
  let index = 0;
  const speed = 100; // Typing speed in milliseconds

  // Reset text content and add the cursor effect again
  textElement.innerHTML = ""; 
  textElement.classList.remove("typed"); // Ensure the cursor is visible again

  function typeEffect() {
    if (index < text.length) {
      textElement.innerHTML = text.substring(0, index + 1);
      index++;
      setTimeout(typeEffect, speed);
    } else {
      // Remove the cursor after typing is complete
      setTimeout(() => {
        textElement.classList.add("typed"); // Remove border-right cursor
      }, 500);
    }
  }

  // Start typing effect on page load
  typeEffect();
});




