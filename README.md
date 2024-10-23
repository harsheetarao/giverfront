# Gone Component Library

A showcase of reusable React components built with Next.js, Tailwind CSS, and TypeScript. This library includes various UI components designed for the Gone platform, featuring responsive layouts, interactive elements, and consistent styling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Component Overview](#component-overview)
- [Production Deployment](#production-deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- 🎨 Consistent design system with custom typography and colors
- 📱 Fully responsive components
- 🔧 Built with TypeScript for type safety
- 🎭 Interactive components with animations
- 🎯 Accessibility-focused design
- 🚀 Production-ready deployment configuration

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git
- Docker (for containerization)
- Google Cloud SDK (for deployment)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-org/gone-component-library.git
cd gone-component-library
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. View the component library at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run start
```

### Docker Local Development

1. Build the Docker image:
```bash
npm run docker:build
```

2. Run the container:
```bash
npm run docker:run
```

## Component Overview

### Core Components

- **Button**: Primary, CTA, and Secondary variants
- **Card**: Standard and Product variants
- **Form Inputs**: Text fields and dropdowns with various states
- **MessageBubble**: Chat-style message components
- **Progress**: Multi-step progress indicator
- **Tag**: Attribute and category indicators
- **Toggle**: State toggles with multiple variants

### Complex Components

- **PickupRequestManager**: Multi-step form for item pickup requests
- **ShoppingCart**: Cart management for one-of-a-kind items
- **SwipeCard**: Tinder-style card component for item review

## Production Deployment

### Google Cloud Platform Setup

1. Install Google Cloud SDK and initialize:
```bash
gcloud init
gcloud config set project YOUR_PROJECT_ID
```

2. Enable required services:
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

3. Set up authentication:
```bash
gcloud auth configure-docker
```

### Deployment Steps

1. Build and deploy using Cloud Build:
```bash
gcloud builds submit
```

2. Configure domain mapping (optional):
```bash
gcloud beta run domain-mappings create \
  --service component-library \
  --domain your-domain.com \
  --region us-central1
```

3. View deployment status:
```bash
gcloud run services describe component-library \
  --region us-central1
```

### Environment Variables

Required environment variables for production:

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=your-api-url
```

Set in Cloud Run:
```bash
gcloud run services update component-library \
  --region us-central1 \
  --set-env-vars "KEY=VALUE"
```

## Project Structure

```
gone-component-library/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── sheet.tsx
│   │   ├── Card.tsx
│   │   ├── CustomButton.tsx
│   │   ├── Progress.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── PickupRequestForm.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ShoppingCart.tsx
│   │   ├── SwipeCard.tsx
│   │   └── Tag.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── README.md
├── cloudbuild.yaml
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Contributing

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:
```bash
git commit -m 'Add some feature'
```

4. Push to the branch:
```bash
git push origin feature/your-feature-name
```

5. Create a Pull Request

### Development Guidelines

- Follow the existing component patterns
- Include TypeScript types
- Add proper documentation
- Ensure accessibility standards
- Test responsive behavior
- Keep consistent styling

## Troubleshooting

### Common Issues

1. Build Failures
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

2. Docker Issues
```bash
# Remove old containers and images
docker system prune
npm run docker:build
```

3. GCP Deployment Issues
```bash
# Check build logs
gcloud builds log [BUILD_ID]

# Check service logs
gcloud logging read "resource.type=cloud_run_revision"
```

## License

[Your License Here]

## Contact

For questions or support, please contact [Your Contact Info]
