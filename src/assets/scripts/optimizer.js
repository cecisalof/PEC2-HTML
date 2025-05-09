// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');

// const inputRoot = path.resolve(__dirname, '../images');
// const outputDir = path.resolve(__dirname, '../../../../dist/images');
// const validExts = ['.jpg', '.jpeg', '.png'];

// const heroSizes = [480, 768, 1200, 1920, 2400];
// const defaultSizes = [480, 768, 1200];

// // Crear la carpeta de salida si no existe
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// function processDir(currentDir, relativePath = '') {
//   const items = fs.readdirSync(currentDir);

//   items.forEach(item => {
//     const inputPath = path.join(currentDir, item);
//     const stats = fs.statSync(inputPath);

//     if (stats.isDirectory()) {
//       const subRelative = path.join(relativePath, item);
//       processDir(inputPath, subRelative);
//     } else {
//       const ext = path.extname(item).toLowerCase();
//       if (!validExts.includes(ext)) return;

//       const isHero = item.toLowerCase().includes('hero');
//       const baseName = path.basename(item, ext);
//       const folderSuffix = relativePath ? '-' + relativePath.replace(/[\\/]/g, '-') : '';
//       const outputBase = `${baseName}${folderSuffix}`;
//       const sizes = isHero ? heroSizes : defaultSizes;

//       sizes.forEach(size => {
//         const image = sharp(inputPath).resize(size);

//         // WEBP
//         image
//           .clone()
//           .webp({ quality: 70 })
//           .toFile(path.join(outputDir, `${outputBase}-${size}.webp`))
//           .then(() => console.log(`✅ ${outputBase}-${size}.webp`))
//           .catch(err => console.error(`❌ WebP error: ${err}`));

//         // AVIF
//         image
//           .clone()
//           .avif({ quality: 50 })
//           .toFile(path.join(outputDir, `${outputBase}-${size}.avif`))
//           .then(() => console.log(`✅ ${outputBase}-${size}.avif`))
//           .catch(err => console.error(`❌ AVIF error: ${err}`));

//         // JPEG fallback
//         image
//           .clone()
//           .jpeg({ quality: 80 })
//           .toFile(path.join(outputDir, `${outputBase}-${size}.jpg`))
//           .then(() => console.log(`✅ ${outputBase}-${size}.jpg`))
//           .catch(err => console.error(`❌ JPEG error: ${err}`));
//       });
//     }
//   });
// }

// // Ejecutar desde raíz
// processDir(inputRoot);
// console.log('✅ Optimización de imágenes completada.');


const sharp = require('sharp');
const fs = require('fs');
const sizes = [480, 768, 1200, 1920, 2400];
const input = 'hero-about.jpg';

sizes.forEach(size => {
  const image = sharp(input).resize(size);

  // WebP
  image
    .clone()
    .webp({ quality: 70 })
    .toFile(`hero-about-${size}.webp`)
    .then(() => console.log(`✅ Generada: hero-about-${size}.webp`))
    .catch(err => console.error('❌ Error (webp):', err));

  // AVIF
  image
    .clone()
    .avif({ quality: 50 }) // puedes ajustar la calidad a tu gusto
    .toFile(`hero-about-${size}.avif`)
    .then(() => console.log(`✅ Generada: hero-about-${size}.avif`))
    .catch(err => console.error('❌ Error (avif):', err));

  // JPG
  image
    .clone()
    .jpeg({ quality: 80 })
    .toFile(`hero-about-${size}.jpg`)
    .then(() => console.log(`✅ Generada: hero-about-${size}.jpg`))
    .catch(err => console.error('❌ Error (jpg):', err));
});
