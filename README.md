- # Gateless Donations Widget
+ # Donation Widget Guide for Fundraising Team

- A zero-dependency static donation widget for non-profit organizations that doesn't require a payment gateway. Built with vanilla JavaScript and Tailwind CSS.
+ A lightweight donation widget that can be embedded in WordPress pages. The widget supports both multi-delegation and single-delegation campaigns without requiring a payment gateway.

- ## Why Gateless?
+ ## Two Modes of Operation

- - 🚫 No payment gateway required
- - 💰 Zero transaction fees
- - 🔒 Direct bank transfers
- - 🌐 Support for local payment methods
- - 🏦 Multi-bank account support
- - ⚡ Instant deployment
+ ### 1. Multi-Delegation Mode (Default)
+ - Accessible via the main page
+ - Allows donors to choose from multiple delegations
+ - Supports three payment methods:
+   - Bank Transfer
+   - MB Way
+   - Multibanco
+ - Each delegation has its own payment details and URLs
+ - Best for general donation campaigns

- ## Features
+ ### 2. Single-Delegation Mode (CP Campaign)
+ - Dedicated page for specific campaigns
+ - Currently configured for the CP campaign
+ - Supports three payment methods:
+   - Bank Transfer
+   - Ser Solidário
+   - MB Way
+ - Uses fixed delegation details
+ - Best for focused fundraising campaigns

- - 🎯 Multiple payment methods (MB Way, Multibanco, Bank Transfer)
- - 🏢 Multi-delegation support with dynamic payment method filtering
- - 💫 Smooth transitions and animations
- - 📱 Fully responsive design
- - 🔧 Easy configuration via JavaScript
- - ⚡ Lightweight and fast
- - 🖼️ Iframe-ready
- - 🔗 Single delegation mode via separate page
- - 📋 One-click copy for bank details
- - 🎨 Customizable styling via Tailwind
- - 📧 Integrated email receipt system
+ ## Embedding the Widget

+ ### For Multi-Delegation Mode
+ Add this code to your WordPress page:
+ ```html
+ <iframe 
+     src="https://coral-elephant.static.domains/" 
+     style="width: 100%; height: 736px; border: none; outline: none;" 
+     allowfullscreen>
+ </iframe>
+ ```

+ ### For Single-Delegation Mode (CP Campaign)
+ Add this code but change the URL to include `/single.html`:
+ ```html
+ <iframe 
+     src="https://coral-elephant.static.domains/single.html" 
+     style="width: 100%; height: 736px; border: none; outline: none;" 
+     allowfullscreen>
+ </iframe>
+ ```

- ## Deployment on Static.app
+ ## Updating Configuration

- 1. Download the ZIP archive of your project from GitHub.
- 2. Extract the ZIP archive to a local directory.
- 3. Go to [static.app](https://static.app) and sign up or log in.
- 4. Create a new project and upload the extracted files.
- 5. Ensure your `js/config.js` file is configured with your payment methods, delegations, and other settings.
+ All settings are managed in the `config.js` file. Here's what you can modify:

+ ### Payment Methods
+ - Names and icons for each payment method
+ - Available in `paymentMethods` section

+ ### Delegation Details
+ - Bank account information
+ - Payment URLs for MB Way and Multibanco
+ - Located in `delegations` section

+ ### Suggested Donation Amounts
+ - Customize donation tiers and descriptions

+ ### Receipt Email
+ - Update the email address for donation receipts

+ ## Making Updates

+ 1. Log in to [static.app](https://static.app)
+ 2. Navigate to the project files
+ 3. Open `js/config.js`
+ 4. Make your changes
+ 5. Save the file
+ 6. Changes will be live within a few minutes

+ ## Need Technical Help?

+ For technical assistance or new features, please contact the development team. Do not modify any files other than `config.js` unless instructed by the technical team.