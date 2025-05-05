/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

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
  if (window.scrollY > headerHeight) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-scroll');
  } else {
    navbar.classList.remove('bg-scroll');
    navbar.classList.add('bg-transparent');
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//   const hero = document.querySelector(".header");
//   console.log(hero);
  
//   const base = hero.dataset.heroBase;
//   const alt = hero.dataset.heroAlt || "Imagen de cabecera";

//   const imageBasePath = `./assets/images/header/${base}`;
//   console.log(imageBasePath);
//   const sources = [
//     {
//       media: "(min-width: 100em)",
//       width: 1920,
//       name: "desktop-hd"
//     },
//     {
//       media: "(min-width: 75em)",
//       width: 1200,
//       name: "desktop"
//     },
//     {
//       media: "(min-width: 48em)",
//       width: 1024,
//       name: "tablet"
//     },
//     {
//       media: "(max-width: 47.99em)",
//       width: 464,
//       name: "mobile"
//     }
//   ];

//   const picture = document.createElement("picture");
//   picture.className = "hero__image";
//   picture.id = "heroPicture";

//   sources.forEach(({ media, width, name }) => {
//     ["avif", "webp"].forEach(type => {
//       const source = document.createElement("source");
//       source.type = `image/${type}`;
//       source.media = media;
//       source.sizes = "100vw";
//       source.srcset = `
//         ${imageBasePath}-${name}.jpg?as=${type}&width=${width}&dpr=2 2x,
//         ${imageBasePath}-${name}.jpg?as=${type}&width=${width}&dpr=1 1x
//       `.trim();
//       console.log(source.srcset);
      
//       picture.appendChild(source);
//     });
//   });

//   const img = document.createElement("img");
//   img.className = "hero__img";
//   img.src = `${imageBasePath}-mobile.jpg`;
//   img.alt = alt;

//   picture.appendChild(img);

//   // Reemplaza el <picture> vacío que ya estaba en el HTML
//   const oldPicture = document.getElementById("heroPicture");
//   oldPicture.replaceWith(picture);
// });



