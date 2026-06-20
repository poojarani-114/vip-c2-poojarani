__Project Design Phase__

__Problem – Solution Fit Template__

Date

15 February 2025

Team ID

pabbathireddy pooja rani

Project Name

ShopEZ

Maximum Marks

2 Marks

__Problem – Solution Fit Template:__

The Problem\-Solution Fit simply means that you have found a problem with your customer and that the solution you have realized for it actually solves the customer’s problem\. It helps entrepreneurs, marketers and corporate innovators identify behavioral patterns and recognize what would work and why

__Purpose:__

- Solve complex problems in a way that fits the state of your customers\.
- Succeed faster and increase your solution adoption by tapping into existing mediums and channels of behavior\.
- Sharpen your communication and marketing strategy with the right triggers and messaging\.
- Increase touch\-points with your company by finding the right problem\-behavior fit and building trust by solving frequent annoyances, or urgent or costly problems\.
- __Understand the existing situation in order to improve it for your target group\.__

__Template:__

[Image: Calendar

Description automatically generated]

References:

1. [https://www\.ideahackers\.network/problem\-solution\-fit\-canvas/](https://www.ideahackers.network/problem-solution-fit-canvas/)
2. [https://medium\.com/@epicantus/problem\-solution\-fit\-canvas\-aa3dd59cb4fe](https://medium.com/@epicantus/problem-solution-fit-canvas-aa3dd59cb4fe)

---

## ShopEZ Problem-Solution Fit Canvas

### 1. Customer Segment
* **Target Group:** Modern digital consumers who want a simple, clean online shopping portal for fashion, electronics, and groceries, without the complexity or slow load times of massive multi-vendor marketplaces.

### 2. Customer Problems & Friction Points
* **Cart Expiration:** Unauthenticated browsing or page reloads frequently result in cart loss on existing platforms.
* **Navigation Fatigue:** It takes too many clicks to narrow down product searches by specific parameters like price, discounts, and ratings.
* **Checkout Obstacles:** Over-complicated multi-step checkout forms lead to user drop-offs.
* **Inventory Desync:** Lack of real-time inventory visibility leads to ordering items that are actually out of stock.

### 3. Current Alternatives & Workarounds
* **Offline Shopping:** Visiting brick-and-mortar stores, which consumes time and transport costs.
* **Bulk Storefronts:** Buying from massive online platforms (e.g., Amazon, eBay) which can feel cluttered and slow down devices.
* **Direct Messaging:** Informally texting vendors on WhatsApp with list items (highly prone to order tracking errors).

### 4. Proposed Solution Features (ShopEZ)
* **SPA Catalog Browsing:** Built with React/Vite, allowing users to browse products smoothly without full-page reloads.
* **Dynamic Sidebar Controls:** Real-time filter by categories (Mobiles, Electronics, Fashion, Groceries, Sports) and sort (Popularity, Price Low/High, Discount) with instant catalog re-render.
* **MongoDB Persistent Cart:** User cart states are written directly to database schemas, allowing persistent recovery across multiple devices and sessions.
* **Unified Checkout Flow:** Simple one-page checkout form capturing shipping address and payment preferences, clearing the cart automatically upon database order verification.

### 5. Behavioral Fit & Triggers
* **Visual Triggers:** High-contrast discount badges (e.g., "15% off") and real-time rating stars instantly catch user attention.
* **Instant Gratification:** Instant cart quantity counts and inline remove buttons provide responsive feedback, increasing user confidence.
* **Security Reassurance:** Role-based access ensures that administrative options are hidden from customers, while standard user data is isolated via verified JWT tokens.
