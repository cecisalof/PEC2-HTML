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

const headerHeight = header && header.offsetHeight;

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > headerHeight - 30) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-scroll');
  } else {
    navbar.classList.remove('bg-scroll');
    navbar.classList.add('bg-transparent');
  }
});

// // Add event listener to validate form
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("form-validation");
//   console.log(form);
  

//   form.addEventListener("submit", function (e) {
//     console.log("event", e.target);
    
//     let hasErrors = false;

//     // Limpiar errores previos
//     document.querySelector(".error_nombre").textContent = "";
//     document.querySelector(".error_email").textContent = "";
//     document.querySelector(".error_categoria").textContent = "";

//     // Obtener valores
//     const nombre = form.nombre.value.trim();
//     const email = form.email.value.trim();
//     const categoria = form.categoria.value;

//     // Validar nombre
//     if (nombre.length < 3) {
//       document.querySelector(".error_nombre").textContent = "Introduce al menos 3 caracteres.";
//       hasErrors = true;
//     }

//     // Validar email
//     const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
//     if (!emailRegex.test(email)) {
//       document.querySelector(".error_email").textContent = "Correo electrónico inválido.";
//       hasErrors = true;
//     }

//     // Validar categoría
//     if (categoria === "") {
//       document.querySelector(".error_categoria").textContent = "Selecciona una categoría.";
//       hasErrors = true;
//     }

//     // Si hay errores, evitar el envío
//     if (hasErrors) {
//       e.preventDefault();
//     }
//   });
// });



