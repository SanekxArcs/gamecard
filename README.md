# Game Card - Flip Animation

A high-quality interactive game collectible card component featuring smooth flip animations, dynamic content updates, and high-fidelity assets.

## Features

- **Flip Animation**: Click the card to flip between front and back faces.
- **Dynamic Content**:
  - Click the **number** to generate a new random value.
  - Click the **label** to cycle through card rarities/types.
- **High Fidelity**: Intentionally utilizes high-resolution assets to preserve visual integrity during transformations and scaling.

## Assets & Quality

Currently, the project uses **maximum quality images** in the `assets/` directory to ensure the best possible visual experience across high-DPI displays and during the flip animation.

### Production Optimization

For a production environment,we can optimize these assets to improve load times and performance. Recommended strategies include:

1. **Format Conversion**:
   - Convert PNG/JPG files to modern formats like **WebP** or **AVIF**, which offer superior compression with minimal quality loss.
   - Use **SVG** for decorative elements (like `decor/Decor.svg`) to ensure infinite scalability with tiny file sizes.
2. **Resolution Scaling**:
   - Provide responsive images using `srcset`. Most card assets don't need to be larger than 2x their display size.
3. **Compression Tools**:
   - **TinyPNG / Squoosh.app**: For manual optimization of raster images.
   - **SVGO**: For cleaning and compressing SVG files.
   - **ImageMagick**: For batch processing and resizing assets.
4. **CSS Optimization**:
   - Use CSS sprites for small repetitive UI elements (like parts of the border or label) to reduce HTTP requests.

## Setup

1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. No build step required for development.

## Project Structure

- `index.html`: Semantic HTML5 structure of the card.
- `styles.css`: transforms, layout, and component styling.
- `script.js`: Interactive logic for flipping and randomizing content.
- `assets/`: Source images and decorations.
