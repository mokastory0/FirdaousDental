// Image optimization script
// Run with: node scripts/optimize-images.js

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '..', 'attached_assets');
const outputDir = path.join(__dirname, '..', 'client', 'public', 'images');

// Ensure output directory exists
await fs.mkdir(outputDir, { recursive: true });

// Image optimization configurations
const images = [
  {
    input: path.join(assetsDir, 'ChatGPT Image Oct 15, 2025, 10_01_54 PM_1760562210918.png'),
    outputs: [
      { name: 'dr-firdaous-logo.webp', width: 48, height: 48, quality: 90 },
      { name: 'dr-firdaous-logo@2x.webp', width: 96, height: 96, quality: 90 },
    ]
  },
  {
    input: path.join(assetsDir, 'cabinet', 'firdaouse.jpg'),
    outputs: [
      { name: 'dr-firdaous-portrait-sm.webp', width: 400, height: null, quality: 85 },
      { name: 'dr-firdaous-portrait-md.webp', width: 600, height: null, quality: 85 },
      { name: 'dr-firdaous-portrait-lg.webp', width: 800, height: null, quality: 80 },
    ]
  },
  {
    input: path.join(assetsDir, 'googlemaps.png'),
    outputs: [
      { name: 'google-maps-icon.webp', width: 28, height: 28, quality: 90 },
      { name: 'google-maps-icon@2x.webp', width: 56, height: 56, quality: 90 },
    ]
  },
  {
    input: path.join(assetsDir, 'dentistback_1759836434776.jpg'),
    outputs: [
      { name: 'hero-bg.webp', width: 1920, height: null, quality: 80 },
      { name: 'hero-bg-mobile.webp', width: 768, height: null, quality: 75 },
    ]
  }
];

console.log('🖼️  Starting image optimization...\n');

for (const image of images) {
  console.log(`Processing: ${path.basename(image.input)}`);
  
  try {
    for (const output of image.outputs) {
      const outputPath = path.join(outputDir, output.name);
      
      let sharpInstance = sharp(image.input);
      
      if (output.width && output.height) {
        sharpInstance = sharpInstance.resize(output.width, output.height, {
          fit: 'cover',
          position: 'center'
        });
      } else if (output.width) {
        sharpInstance = sharpInstance.resize(output.width, null, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }
      
      await sharpInstance
        .webp({ quality: output.quality })
        .toFile(outputPath);
      
      const stats = await fs.stat(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(`  ✅ ${output.name} (${output.width}x${output.height || 'auto'}) - ${sizeKB} KB`);
    }
  } catch (error) {
    console.error(`  ❌ Error processing ${path.basename(image.input)}:`, error.message);
  }
  
  console.log('');
}

console.log('✨ Image optimization complete!');
console.log(`📁 Optimized images saved to: ${outputDir}`);
