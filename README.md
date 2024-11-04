# Gone Component Library

## Installation

```bash
npm install @get-it-gone/component-library
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

2. Import and use components:

```typescript
import { Button, Card, ProductCard } from '@get-it-gone/component-library';

export default function MyPage() {
    return (
        <div>
            <Button variant="primary">Click Me</Button>
            <Card>
                <h2>My Card</h2>
            </Card>
        </div>
    );
}
```

## Available Components

### UI Components
- Button
- Card
- CustomButton
- FormDropdown
- FormInput
- MessageBubble
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

