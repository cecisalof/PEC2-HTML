/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap'


/**
 * Write any other JavaScript below
 */

// Add event listener to toggle mobile menu
const links = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname;

links.forEach(link => {  
  if (link.getAttribute('href') === currentUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Add event listener to change navbar background on scroll
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > headerHeight - 20) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-scroll');
  } else {
    navbar.classList.remove('bg-scroll');
    navbar.classList.add('bg-transparent');
  }
});