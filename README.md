# Gone Component Library

## Installation

```bash
npm install @get-it-gone/component-library
```

## Required Peer Dependencies

The following packages are required as peer dependencies:

```bash
npm install @googlemaps/js-api-loader use-places-autocomplete lucide-react framer-motion @radix-ui/react-dialog @radix-ui/react-slot class-variance-authority
```

## Setup

1. Add the component library's Tailwind preset to your tailwind.config.js:

```javascript
module.exports = {
    presets: [
        require('@get-it-gone/component-library/tailwind-preset')
    ],
    // ... your config
}
```

2. Configure required fonts in your CSS:
```css
@font-face {
    font-family: 'Rockwell';
    /* Add your font configuration */
}

@font-face {
    font-family: 'Source Sans';
    /* Add your font configuration */
}
```

3. For components using Google Places (like PickupRequestForm), set up your Google Maps API:
```typescript
// In your app initialization
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"]
});

loader.load();
```

## Available Components

### UI Components
- Button
- Card
- CustomButton
- FormDropdown
- FormInput
- MessageBubble
- Modal
- PickupRequestForm
- PickupRequestManager
- ProductCard
- Progress
- ShoppingCart
- SwipeCardDeck
- Tag
- Toggle

### Layout Components
- Header
- Footer
- Page

## Documentation

## Places Autocomplete Setup

To use the address autocomplete feature:

1. Install required dependencies:

```bash
npm install use-places-autocomplete
```

2. Set up your Google Maps API key

3. Load the Google Maps JavaScript API with Places library

