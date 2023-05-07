// Get the navbar element
const navbar = document.querySelector('.home-sorting');

// Get the header height
const headerHeight = document.querySelector('header').offsetHeight;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past the header
  if (window.scrollY > headerHeight) {
    // Add the sticky class to the navbar
    navbar.classList.add('sticky');
  } else {
    // Remove the sticky class from the navbar
    navbar.classList.remove('sticky');
  }
});
