__Project Design Phase\-II__

__Solution Requirements \(Functional & Non\-functional\)__

Date

31 January 2025

Team ID

pabbathireddy pooja rani

Project Name

ShopEZ

Maximum Marks

4 Marks

__Functional Requirements:__

Following are the functional requirements of the proposed solution\.

| FR No. | Functional Requirement (Epic) | Sub Requirement (Story / Sub-Task) |
| :--- | :--- | :--- |
| **FR-1** | User Session & Accounts | - Registration form with fields for Username, Email, Password, and Role selection (Customer vs Admin).<br>- Hashing password strings using `bcryptjs` (salt rounds = 10).<br>- Dynamic authorization router restricting paths based on JWT roles. |
| **FR-2** | Shop Product Catalog | - Renders active inventory catalog grouped by default categories (Mobiles, Groceries, Fashion, etc.).<br>- Dynamic search bar resolving matches instantly on name/description.<br>- Multi-criteria sidebar filters sorting catalog collections by ratings, discount levels, and prices. |
| **FR-3** | Persistent Cart Engine | - Session persistent storage linked to user profiles in MongoDB.<br>- Dynamic cart update controls permitting addition/removal and inline quantity increments.<br>- Live subtotal calculation on cart views. |
| **FR-4** | Order Checkout & Tracking | - Standardized one-page form capturing delivery address and payment choice.<br>- Transaction generation clearing user cart on order success.<br>- Profile history dashboard fetching individual shopper order logs.<br>- Administrative monitor displaying global order history. |

__Non-functional Requirements:__

Following are the non-functional requirements of the proposed solution.

| NFR No. | Non-Functional Requirement | Description |
| :--- | :--- | :--- |
| **NFR-1** | **Usability** | The interface follows premium web guidelines (Outfit/Roboto typography, harmonized HSL layouts, clear interactive state changes) resulting in a modern shopping experience. |
| **NFR-2** | **Security** | Access controls implemented using JSON Web Tokens (JWT) stored locally. Routes checks validation status and return standard `401`/`403` error statuses upon permission violation. |
| **NFR-3** | **Reliability** | Consistent catalog database calls using schema-backed Mongoose validations, preventing corruption or typing errors. |
| **NFR-4** | **Performance** | Web presentation built using Vite React to support hot-loading and rapid SPA routing with API requests resolving under 200ms. |
| **NFR-5** | **Availability** | Server routes designed stateless to allow application replication across active clusters. |
| **NFR-6** | **Scalability** | Separated presentation and application layer architecture (MERN stack client-server model) allowing independent component scaling. |

