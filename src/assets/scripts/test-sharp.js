// const sharp = require('sharp');

// sharp('input.jpg')
//   .resize(800)
//   .toFile('output.webp')
//   .then(() => console.log('✅ Sharp está funcionando correctamente.'))
//   .catch(err => console.error('❌ Error con Sharp:', err));


const sharp = require('sharp');
const fs = require('fs');
const sizes = [480, 768, 1200];
const input = 'input.jpg';

sizes.forEach(size => {
  sharp(input)
    .resize(size)
    .webp({ quality: 70 })
    .toFile(`output-${size}.webp`)
    .then(() => console.log(`✅ Generada: output-${size}.webp`))
    .catch(err => console.error('❌ Error:', err));
});
