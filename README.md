# Gateless Donations Widget

A zero-dependency donation widget for non-profit organizations that doesn't require a payment gateway. Built with React and Tailwind CSS.

## Why Gateless?

- 🚫 No payment gateway required
- 💰 Zero transaction fees
- 🔒 Direct bank transfers
- 🌐 Support for local payment methods
- 🏦 Multi-bank account support
- ⚡ Instant deployment

## Features

- 🎯 Multiple payment methods (MB Way, Multibanco, Bank Transfer)
- 🏢 Multi-delegation support with dynamic payment method filtering
- 💫 Smooth transitions and animations
- 📱 Fully responsive design
- 🔧 Easy configuration via YAML
- ⚡ Lightweight and fast
- 🖼️ Iframe-ready
- 🔗 Single delegation mode via URL parameter
- 📋 One-click copy for bank details
- 🎨 Customizable styling via Tailwind
- 📧 Integrated email receipt system

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/gateless-donations)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gateless-donations
cd gateless-donations
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Configuration

All configuration is managed through `src/config/donation.yml`. Here's how to customize it:

### Payment Methods

```yaml
paymentMethods:
  mbway:
    name: MB Way
    icon: mb-way-logo.svg
  multibanco:
    name: Multibanco
    icon: multibanco-logo.svg
  transferencia:
    name: Transferência Bancária
    icon: building2
```

### Delegations

Add or modify delegations with their respective banking details and payment URLs:

```yaml
delegations:
  DelegationName:
    iban: PT50 XXXX XXXX XXXX XXXX XXXX X
    swift: XXXXXXXX
    bank:
      name: BANK NAME
      legal: LEGAL ENTITY NAME
    paymentUrls:
      mbway: https://pay.example.com/delegation/mbway
      multibanco: https://pay.example.com/delegation/multibanco
```

### Payment Method Availability

Payment methods are automatically available based on the presence of payment URLs in each delegation's configuration:
- Bank transfers are always available
- MB Way and Multibanco require valid payment URLs

Example:
```yaml
delegations:
  Lisboa:
    # ... other details ...
    paymentUrls:
      mbway: https://pay.example.com/lisboa/mbway
      multibanco: https://pay.example.com/lisboa/multibanco
  Porto:
    # ... other details ...
    # No payment URLs = only bank transfers available
```

### Donation Amounts

Customize suggested donation amounts:

```yaml
donationAmounts:
  - description: 10 Refeições
    amount: 25
  - description: Um Mês, Uma Família
    amount: 55
```

### Email Configuration

Set up the receipt email address:

```yaml
email:
  receipt:
    address: your-email@example.com
```

## URLs and Routing

The widget supports two main routes:

- `/`: Full donation form with delegation selection
- `/single`: Single delegation form (uses `defaultDelegation` from config)

## Embedding

### Basic Implementation

Add the widget to your website using an iframe:

```html
<iframe 
  src="https://your-deployment-url.netlify.app" 
  width="100%" 
  height="800px" 
  style="border: none; max-width: 500px; margin: 0 auto; display: block;"
  title="Donation Form"
></iframe>
```

### Single Delegation Mode

To embed the widget for a specific delegation:

```html
<iframe 
  src="https://your-deployment-url.netlify.app/single" 
  width="100%" 
  height="800px" 
  style="border: none; max-width: 500px; margin: 0 auto; display: block;"
  title="Donation Form"
></iframe>
```

### Responsive Implementation

For a fully responsive experience, use this wrapper:

```html
<div style="position: relative; width: 100%; max-width: 500px; margin: 0 auto;">
  <div style="padding-top: 150%;">
    <iframe 
      src="https://your-deployment-url.netlify.app"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
      title="Donation Form"
      loading="lazy"
    ></iframe>
  </div>
</div>
```

## License

MIT License - feel free to use and modify for your non-profit organization.</content>
<boltAction type="file" filePath="package.json">
{
  "name": "gateless-donations",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3",
    "yaml": "^2.4.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.1.6"
  }
}