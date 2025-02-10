function togglemenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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

