__Project Design Phase\-II__

__Data Flow Diagram & User Stories__

Date

31 January 2025

Team ID

pabbathireddy pooja rani

Project Name

ShopEZ

Maximum Marks

4 Marks

__Data Flow Diagrams:__

A Data Flow Diagram \(DFD\) is a traditional visual representation of the information flows within a system\. A neat and clear DFD can depict the right amount of the system requirement graphically\. It shows how data enters and leaves the system, what changes the information, and where data is stored\.

[Image: ][Image: ]

__Example: __[__\(Simplified\)__](https://developer.ibm.com/patterns/visualize-unstructured-text/)[Image: ]

__[Image: Diagram, timeline

Description automatically generated]__

---

## Data Flow Diagram Descriptions

### Level 0 DFD (Context Diagram)
* **Entities:** Customer, Administrator, Database.
* **Process 0.0 (ShopEZ System):** Receives Registration/Login credentials, Search queries, Cart choices, and Checkout details from the Customer; returns Product displays, Cart counts, and Order confirmations. Receives Product listings, Banner settings, and Order lookup requests from the Administrator; returns Inventory lists and System transaction metrics.

### Level 1 DFD (Detailed Data Flows)
* **Process 1.0 (Authentication Service):** Validates credentials, issues JWT signature, and writes user records to the `users` database table.
* **Process 2.0 (Product Catalog Management):** Reads inventory details from `products` collections, processes search criteria and filters, and renders formatted pages to the frontend.
* **Process 3.0 (Cart Engine):** Synchronizes items between memory states and MongoDB `cart` collections based on customer additions, quantity modifications, or item removals.
* **Process 4.0 (Order & Checkout Processor):** Validates shipping inputs, calculates total amounts, generates an `orders` transaction, clears the user's `cart`, and updates product stock levels.
* **Process 5.0 (Admin Controller):** Verifies request token permissions before updating site banners, creating new product listings, or fetching customer order histories.

---

## User Stories Backlog

| User Type | Functional Epic | Story ID | User Story / Task | Acceptance Criteria | Priority | Release |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Customer** | Registration | **USN-1** | As a new visitor, I want to register for a ShopEZ account so I can access a personal shopping profile. | Validation checks on email and unique usernames; passwords securely hashed; redirects user to login. | High | Sprint-1 |
| **Customer** | Login | **USN-2** | As a registered customer, I want to log in using my email and password to access my persistent cart. | Matches hashed DB password; returns signed JWT; stores credentials locally to persist session. | High | Sprint-1 |
| **Customer** | Catalog Browsing | **USN-3** | As a visitor, I want to view a catalog of all available products with prices, discount percentages, and ratings. | Displays product grid with images, descriptions, rating stars, and discount tags. | High | Sprint-2 |
| **Customer** | Catalog Filtering | **USN-4** | As a shopper, I want to filter products by category and sort them by price, ratings, or discount. | Sidebar filters update list state instantly without reloading; sorting displays items in chosen order. | High | Sprint-2 |
| **Customer** | Cart Management | **USN-5** | As a shopper, I want to add products to my cart, update quantities, and see a live subtotal calculation. | Cart updates persistent MongoDB collection; quantity additions recalculate total price instantly. | High | Sprint-3 |
| **Customer** | Cart Persistence | **USN-6** | As a shopper, I want my cart items to remain saved even if I refresh the page or log out and log back in. | Retains cart entries on refresh by fetching current state using JWT authentication on component load. | High | Sprint-3 |
| **Customer** | Checkout | **USN-7** | As a customer, I want to enter my shipping address and choose a payment method to place my order. | Clears the customer's cart collection; inserts new transaction into orders collection; shows success alert. | High | Sprint-3 |
| **Customer** | Profile Dashboard | **USN-8** | As a customer, I want to view a list of all my past orders on my profile page so I can track my transactions. | Fetches database records matching customer's user ID and displays them in chronological order. | Medium | Sprint-4 |
| **Administrator** | Auth Control | **USN-9** | As an admin, I want to log in securely and be redirected to a role-guarded management dashboard. | Checks `userType === 'admin'`; blocks non-admin users from accessing routes prefixed with `/admin`. | High | Sprint-4 |
| **Administrator** | Product Control | **USN-10** | As an admin, I want to add new products and delete outdated listings from the store inventory. | Form submits product parameters (price, discount, stock, image URL); updates products collection. | High | Sprint-4 |
| **Administrator** | Store Settings | **USN-11** | As an admin, I want to update the homepage hero banner text, images, and category lists. | UI form writes modifications to the backend configuration endpoints; changes apply site-wide. | Medium | Sprint-4 |
| **Administrator** | Order Tracking | **USN-12** | As an admin, I want to view all placed orders in the system, including buyer emails, addresses, and status. | Displays list of all orders from DB collection; shows items list and buyer details for audit. | Medium | Sprint-4 |

