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