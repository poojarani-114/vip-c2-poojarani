__Project Design Phase__

__Solution Architecture__

Date

15 February 2025

Team ID

pabbathireddy pooja rani

Project Name

ShopEZ

Maximum Marks

4 Marks

__Solution Architecture:__

Solution architecture is a complex process – with many sub\-processes – that bridges the gap between business problems and technology solutions\. Its goals are to:

- Find the best tech solution to solve existing business problems\.
- Describe the structure, characteristics, behavior, and other aspects of the software to project stakeholders\.
- Define features, development phases, and solution requirements\.
- Provide specifications according to which the solution is defined, managed, and delivered\.

__Example \- Solution Architecture Diagram: __

[Image: Voice applications in clinical research powered by AI on AWS – Part 1:  Architecture and design considerations | AWS for Industries]

*Figure 1: Architecture and data flow of the voice patient diary sample application*

__Reference: __[__https://aws\.amazon\.com/blogs/industries/voice\-applications\-in\-clinical\-research\-powered\-by\-ai\-on\-aws\-part\-1\-architecture\-and\-design\-considerations/__](https://aws.amazon.com/blogs/industries/voice-applications-in-clinical-research-powered-by-ai-on-aws-part-1-architecture-and-design-considerations/)

---

## ShopEZ Technical Architecture Diagram

```mermaid
graph TD
    subgraph Client [React Frontend (Vite)]
        UI[User Interface Components] --> Router[React Router DOM]
        Router --> Context[AuthContext]
        Router --> API[Axios HTTP Client]
    end

    subgraph Server [Express Backend]
        API --> AuthMiddleware[JWT auth middleware]
        AuthMiddleware --> Routes[Express Routes]
        Routes --> Controllers[Controllers]
    end

    subgraph Database [MongoDB]
        Controllers --> Mongoose[Mongoose Schemas]
        Mongoose --> Collections[(MongoDB Collections)]
    end
```

### Architectural Component Specifications

#### 1. Presentation Layer (React + Vite SPA)
* **Components:** Custom navigation controls (`Navbar`), interactive product list grids (`ProductCard`), dynamic catalogs (`Products`), details panels (`ProductDetails`), session verification forms (`Login`/`Register`), persistent catalog modifications (`Cart` / `Checkout`), and role-guarded panels (`AdminDashboard`).
* **Router & Security Guards:** Client-side path validation via `react-router-dom`. Standard shoppers are restricted from accessing URL pathways prefixed with `/admin`, and unauthorized users are redirected to `/login` when navigating to secure spaces like `/cart` or `/profile`.
* **State Management:** Session tokens and authentication states are maintained via React `AuthContext` and cached within browser local storage.
* **Network Interactions:** Asynchronous REST requests handled via a configured `Axios` instance, automatically attaching the local JSON Web Token to outbound headers.

#### 2. Service & Application Logic Layer (Express + Node.js)
* **Security Interceptors:** Middleware intercepts incoming requests, validates JWT headers, and resolves the caller's credentials and authorization roles (`customer` or `admin`).
* **Routes & Controller Mappings:** Endpoints separated into `/api/auth`, `/api/products`, `/api/cart`, `/api/orders`, and `/api/admin` mapping client payloads to business operations.

#### 3. Database Layer (MongoDB & Mongoose schemas)
* Mongoose schema validations govern database collection formats.
* Relational dependencies between data elements (e.g., matching a cart item or order transaction to the specific buyer ID) are handled via database queries.
* Seed scripts allow the automatic population of inventory states for development and testing.
