__User Acceptance Testing \(UAT\) Template __

Date

Team ID

pabbathireddy pooja rani

Project Name

ShopEZ

Maximum Marks

__Project Overview:__

Project Name: ShopEZ

Project Description: A premium MERN-stack e-commerce application supporting secure accounts, real-time product catalogs, persistent shopping carts, and order checkout flows.

Project Version: v1.0.0

Testing Period: 18 June 2026 to 20 June 2026

__Testing Scope:__

* **In-Scope:**
  * User authentication flows (Registration, Login, Context persistence).
  * Catalog controls (Category selection filtering, Price sorting, Rating displays).
  * Cart interactions (Add items, Quantity updates, Subtotal recalculations, Persistent states).
  * Order placements (Address submission, Payment option selections, Cart clearing).
  * Admin dashboard management (Product creation/deletion, store configuration edits, global order audits).
* **Out-of-Scope:**
  * External bank payment gateway processing (UPI/Card payments simulated locally).
  * Multi-image AWS S3 file upload configurations.

__Testing Environment:__

URL/Location: Local environment: Client on `http://localhost:5173`, API on `http://localhost:5000`

Credentials (if required): Customer: `pooja@shopez.com` / `password123`, Admin: `admin@shopez.com` / `admin123`

__Test Cases:__

| Test Case ID | Test Scenario | Test Steps | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-001** | User Account Creation | 1. Navigate to `/register`<br>2. Fill out fields (username, email, password, role)<br>3. Submit the registration form. | System hashes password, stores user entry in MongoDB, and redirects user to login. | Successfully redirected to login; database entry verified in Compass. | **Pass** |
| **TC-002** | Customer Login & Session | 1. Navigate to `/login`<br>2. Enter register credentials<br>3. Click sign-in. | API verifies credentials, returns signed JWT token, updates AuthContext, and redirects to catalog `/`. | Logged in successfully; JWT token stored in browser LocalStorage. | **Pass** |
| **TC-003** | Dynamic Catalog Filter | 1. Open home catalog page<br>2. Select "Electronics" category filter<br>3. Sort by "Price (High to Low)". | Catalog displays only electronics items arranged in descending order of cost. | Products filtered and sorted correctly with immediate page update. | **Pass** |
| **TC-004** | Persistent Cart Sync | 1. Add "Cotton Shirt" to cart<br>2. Check cart count indicator<br>3. Reload browser page. | Cart counter increments; reloaded page retains the added item by querying DB session logs. | Cart holds persistent items across refresh; subtotal matches. | **Pass** |
| **TC-005** | Order Checkout Flow | 1. Click "Checkout" in cart view<br>2. Input shipping address details<br>3. Select "UPI" payment and submit. | Order is saved in MongoDB `orders` collection, customer cart is cleared, and profile page shows new order. | Order placed successfully; cart emptied; profile dashboard shows new order record. | **Pass** |
| **TC-006** | Administrative Security | 1. Log in as a customer<br>2. Attempt to navigate directly to `/admin`. | Application blocks path access and redirects visitor to homepage. | Prevented unauthorized URL routing; returns status code 403. | **Pass** |
| **TC-007** | Admin Product Creation | 1. Log in as Admin<br>2. Go to Admin Products panel<br>3. Fill out fields and submit. | New product is added, and instantly shows up in the public catalog listing. | Product listing created successfully; catalog grid rendered without issues. | **Pass** |

__Bug Tracking:__

| Bug ID | Bug Description | Steps to Reproduce | Severity | Status | Additional Feedback |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BG-001** | Cart counts do not update instantly when removing items. | 1. Add item to cart.<br>2. Navigate to cart page.<br>3. Click "Remove". | Medium | Closed | Fixed by triggering a React state reload hook upon database deletion return. |
| **BG-002** | Loose validation on checkout form allows empty addresses. | 1. Add item to cart.<br>2. Proceed to checkout.<br>3. Submit form with empty address. | Low | In Progress | Will add frontend schema verification using HTML required fields. |

__Sign-off:__

Tester Name: pabbathireddy pooja rani

Date: 20 June 2026

Signature: pabbathireddy pooja rani

__Notes:__

- Ensure that all test cases cover both positive and negative scenarios.
- Encourage testers to provide detailed feedback, including any suggestions for improvement.
- Bug tracking should include details such as severity, status, and steps to reproduce.
- Obtain sign-off from both the project manager and product owner before proceeding with deployment.

