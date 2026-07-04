import sharp from 'sharp';

const images = [
  'truck-israel',
  'kran',
  'packing-service',
  'razborka',
  'apartment-moving',
];

for (const name of images) {
  const input = `src/assets/hero/${name}.jpg`;
  const output = `src/assets/hero/${name}.webp`;

  await sharp(input)
    .resize({
      width: 1600,
      withoutEnlargement: true,
    })
    .webp({
      quality: 75,
    })
    .toFile(output);

  console.log(`Created: ${output}`);
}