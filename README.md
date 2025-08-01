# Nike Product Showcase

A static Nike-inspired product showcase page featuring shoes for Men, Women, and Kids.

## Features

- **Desktop-optimized design** with Nike-inspired styling
- **Product categories**: Men, Women, Kids with expandable product details
- **Smooth scrolling navigation** between sections
- **Interactive product cards** with hover effects
- **About section** with Nike's origin story and timeline
- **Static implementation** - no backend required

## Customization

### Adding Real Product Images

Replace the placeholder product images by:

1. Add your product images to the project folder
2. Update the `image_url` field in the products array (line 367 in index.html)
3. Replace the placeholder div with actual img tags:

```javascript
// Change this:
<div class="product-image">${product.name} Image</div>

// To this:
<div class="product-image">
    <img src="${product.image_url}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Adding More Products

Extend the `products` array in the JavaScript section with new shoe data:

```javascript
{
    "id": "unique-product-id",
    "category": "Men|Women|Kids",
    "name": "Product Name",
    "price": "$XXX",
    "short_description": "Brief description for card",
    "full_description": "Detailed description shown when expanded",
    "image_url": "path/to/image.jpg",
    "tags": ["New", "Running", "Iconic", etc.]
}
```

### Styling Customization

Key CSS variables to modify colors:
- `--nike-orange`: Primary accent color
- `--dark-text`: Main text color
- `--light-gray`: Background sections
- `--medium-gray`: Secondary text

## Usage

Simply open `index.html` in any modern web browser. The page is fully self-contained with embedded CSS and JavaScript.
