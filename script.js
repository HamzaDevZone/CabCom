// Get the toggle button and mobile menu elements  
const menuToggleButton = document.getElementById('menu-toggle');  
const mobileMenu = document.getElementById('mobileMenu');  

// Add click event listener to toggle the mobile menu visibility  
menuToggleButton.addEventListener('click', () => {  
  // Toggle 'display' style between 'none' and 'flex'  
  if (mobileMenu.style.display === 'flex') {  
    mobileMenu.style.display = 'none';  
  } else {  
    mobileMenu.style.display = 'flex';  
  }  
});  


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    });
});