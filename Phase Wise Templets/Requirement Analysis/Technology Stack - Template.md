__Project Design Phase\-II__

__Technology Stack \(Architecture & Stack\)__

Date

31 January 3035

Team ID

pabbathireddy pooja rani

Project Name

ShopEZ

Maximum Marks

4 Marks

__Technical Architecture:__

The Deliverable shall include the architectural diagram as below and the information as per the table1 & table 2

__Example: Order processing during pandemics for offline mode__

__Reference: __[__https://developer\.ibm\.com/patterns/ai\-powered\-backend\-system\-for\-order\-processing\-during\-pandemics/__](https://developer.ibm.com/patterns/ai-powered-backend-system-for-order-processing-during-pandemics/)

[Image: ]

[Image: flow]

__			  
__

__Table-1 : Components & Technologies:__

| S.No | Component | Description | Technology |
| :--- | :--- | :--- | :--- |
| 1 | **User Interface** | Single Page Application (SPA) client interface for shoppers and administrators. | **React 18, Vite, Vanilla CSS** |
| 2 | **Application Logic (Backend)** | REST API server handling user sessions, validation middleware, and inventory controls. | **Node.js, Express.js** |
| 3 | **Database** | Document store saving users, products, carts, orders, and banner configurations. | **MongoDB, Mongoose ORM** |
| 4 | **Session Security** | Verification mechanism governing login credentials and payload signatures. | **JSON Web Tokens (JWT), BcryptJS** |
| 5 | **API Communication** | HTTP client wrapper managing request headers and auth interceptors. | **Axios** |
| 6 | **Infrastructure** | Environment running local backend server and local Vite client. | **Local Host (Ports 5000 / 5173), Node runtime** |

__Table-2: Application Characteristics:__

| S.No | Characteristics | Description | Technology |
| :--- | :--- | :--- | :--- |
| 1 | **Open-Source Frameworks** | Standard components, client-side router, and database schema mappings. | **React, Express, Mongoose** |
| 2 | **Security Implementations** | Access control verification via JWT; salted passwords; role separation middleware. | **BcryptJS (10 rounds), Express Auth Middleware** |
| 3 | **Scalable Architecture** | Decoupled client-server design enabling independent frontend hosting and backend container scaling. | **3-Tier Client-Server Architecture** |
| 4 | **Availability** | Stateless backend API controllers designed to run across multiple server instances. | **Stateless REST Services** |
| 5 | **Performance** | Optimized bundling and virtual DOM rendering ensuring rapid catalog updates. | **Vite bundler, React Virtual DOM** |

__References:__

1. [https://c4model.com/](https://c4model.com/)
2. [https://developer.ibm.com/patterns/online-order-processing-system-during-pandemic/](https://developer.ibm.com/patterns/online-order-processing-system-during-pandemic/)
3. [https://www.ibm.com/cloud/architecture](https://www.ibm.com/cloud/architecture)
4. [https://aws.amazon.com/architecture](https://aws.amazon.com/architecture)
5. [https://medium.com/the-internal-startup/how-to-draw-useful-technical-architecture-diagrams-2d20c9fda90d](https://medium.com/the-internal-startup/how-to-draw-useful-technical-architecture-diagrams-2d20c9fda90d)

