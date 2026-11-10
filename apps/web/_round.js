const sharp = require('sharp');
const fs = require('fs');

const files = [
  'public/favicon.png',
  'public/favicon-32.png',
  'public/icon-192.png',
  'public/icon-512.png',
  'public/apple-touch-icon.png',
];

async function roundCorners(file) {
  const meta = await sharp(file).metadata();
  const w = meta.width, h = meta.height;
  const r = Math.round(Math.min(w, h) * 0.10);
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="#ffffff"/></svg>`;
  await sharp(file)
    .ensureAlpha()
    .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
    .png()
    .toFile(file + '.tmp');
  fs.renameSync(file + '.tmp', file);
  console.log(`rounded ${file} (${w}x${h}, r=${r})`);
}

(async () => {
  for (const f of files) {
    await roundCorners(f);
  }
  console.log('done');
})();
