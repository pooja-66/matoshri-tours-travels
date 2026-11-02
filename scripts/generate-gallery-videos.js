import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const videosDir = path.join(root, 'public', 'images', 'gallery', 'videos');
const configPath = path.join(root, 'src', 'config.js');

function getVideos() {
  if (!fs.existsSync(videosDir)) {
    return [];
  }
  const files = fs.readdirSync(videosDir);
  const mp4s = files
    .filter(f => f.toLowerCase().endsWith('.mp4'))
    .sort((a, b) => {
      // Keep existing behavior somewhat stable; sort by name for consistency
      return a.localeCompare(b);
    });
  return mp4s.map(name => ({
    src: `/images/gallery/videos/${name}`,
    alt: path.parse(name).name
  }));
}

function updateConfig(videos) {
  let content = fs.readFileSync(configPath, 'utf-8');
  const startMarker = 'export const galleryVideos = [';
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error('Could not find galleryVideos in config.js');
  }
  // Find end of array (next export)
  const endMarker = '\n];';
  const endIdx = content.indexOf(endMarker, startIdx);
  if (endIdx === -1) {
    throw new Error('Could not find end of galleryVideos array');
  }
  const before = content.slice(0, startIdx);
  const after = content.slice(endIdx + endMarker.length);
  const items = videos.map(v => `  { src: "${v.src}", alt: "${v.alt.replace(/"/g, '\\"')}" },`).join('\n');
  const newBlock = `export const galleryVideos = [\n${items}\n];`;
  const newContent = before + newBlock + after;
  fs.writeFileSync(configPath, newContent);
}

const videos = getVideos();
updateConfig(videos);
console.log(`Updated galleryVideos with ${videos.length} entries`);
