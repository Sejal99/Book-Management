# E-Commerce Platform 📚🛒

This project is a full-stack e-commerce platform designed to provide users with a seamless online shopping experience. It allows users to browse and purchase books, manage their shopping carts, place orders, and manage their accounts. Administrators can manage the book catalog and user accounts. The platform integrates with Stripe for secure payment processing.

## 🚀 Key Features

- **User Authentication:** Secure user registration, login, and logout functionality. 🔑
- **Product Catalog:** Browse a wide selection of books with detailed information. 📖
- **Shopping Cart:** Add, remove, and manage items in a shopping cart. 🛒
- **Checkout Process:** Seamless integration with Stripe for secure payment processing. 💳
- **Order Management:** Users can view their order history. 📦
- **Admin Panel:** Administrators can manage books and user accounts (implementation details not provided in summaries). ⚙️
- **Responsive Design:**  The platform is designed to be responsive and accessible on various devices. 📱💻
- **Token Based Authentication:** Uses token based authentication to validate user.

## 🛠️ Tech Stack

- **Frontend:**
    - React: For building the user interface.
    - Next.js: For server-side rendering, routing, and optimized performance.
    - Tailwind CSS: For styling the components.
    - Redux Toolkit: For state management.
    - `@stripe/react-stripe-js`: For Stripe integration.
    - `@stripe/stripe-js`: For loading the Stripe library.
    - `next/image`: For optimized image rendering.
    - `next/link`: For creating links.
    - `next/navigation`: For routing.

- **Backend:**
    - Node.js: For running the server.
    - Express: Web framework for building the API.
    - Mongoose: ODM (Object-Document Mapper) for interacting with MongoDB.
    - Nodemailer: For sending emails.
    - Cors: Enables Cross-Origin Resource Sharing.
    - Dotenv: Loads environment variables from a `.env` file.

- **Database:**
    - MongoDB: For storing data.

- **Payment Processing:**
    - Stripe: For handling payments.

- **Other:**
    - JSDoc: For documenting the Next.js configuration.

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB installed and running
- Stripe account and API keys

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install dependencies for the client:

    ```bash
    cd client
    npm install  # or yarn install
    ```

3.  Install dependencies for the server:

    ```bash
    cd ../server
    npm install  # or yarn install
    ```

4.  Create a `.env` file in both the `client` and `server` directories. Add the following environment variables (replace with your actual values):

    **client/.env:**

    ```
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
    NEXT_PUBLIC_BASE_URL=<your_backend_base_url> # e.g., http://localhost:4000
    ```

    **server/.env:**

    ```
    PORT=4000
    MONGODB_URI=<your_mongodb_connection_string>
    STRIPE_SECRET_KEY=<your_stripe_secret_key>
    STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
    GMAIL_USER=<your_gmail_email>
    GMAIL_PASS=<your_gmail_password>
    BASE_URL=<your_frontend_base_url> # e.g., http://localhost:3000
    ```

### Running Locally

1.  Start the backend server:

    ```bash
    cd server
    npm run dev # or yarn dev (if you use yarn)
    ```

2.  Start the frontend development server:

    ```bash
    cd ../client
    npm run dev # or yarn dev (if you use yarn)
    ```

    The frontend will typically run on `http://localhost:3000`. The backend will typically run on `http://localhost:4000`.

## 📂 Project Structure

```
├── client/             # Frontend application
│   ├── next.config.mjs   # Next.js configuration
│   ├── public/           # Static assets (images, etc.)
│   ├── src/              # Source code
│   │   ├── app/            # Next.js app directory
│   │   │   ├── (Components)/ # Reusable components
│   │   │   │   ├── Cart.tsx       # Cart component
│   │   │   │   ├── CheckoutForm.tsx # Checkout form component
│   │   │   │   ├── GlobalRedux/   # Redux store configuration
│   │   │   │   │   ├── Features/   # Redux slices
│   │   │   │   │   │   ├── BookSlice.tsx  # Book slice
│   │   │   │   │   │   └── CounterSlice.tsx # Counter slice
│   │   │   │   │   ├── store.ts     # Redux store
│   │   │   │   ├── Navbar.tsx     # Navbar component
│   │   │   │   ├── base.tsx       # Base URL configuration
│   │   │   │   ├── verifyToken.tsx # Token verification utility
│   │   │   ├── admin/
│   │   │   │   └── auth/
│   │   │   │       └── page.tsx    # Admin login page
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx        # Checkout page
│   │   │   ├── login/
│   │   │   │   └── page.tsx        # Login page
│   │   │   ├── my-orders/
│   │   │   │   └── page.tsx        # My Orders page
│   │   │   ├── signup/
│   │   │   │   └── page.tsx        # Signup page
│   │   │   ├── page.tsx            # Home page
│   │   ├── styles/         # CSS styles
│   ├── package.json      # Dependencies and scripts
│   └── tsconfig.json     # TypeScript configuration
├── server/             # Backend server
│   ├── controllers/      # Route handlers/controllers
│   │   └── orders.js     # Order-related controllers
│   ├── mail/             # Mail configuration
│   │   └── transporter.js # Nodemailer transporter
│   ├── routes/           # API routes
│   │   ├── books.js       # Book routes
│   │   ├── orders.js      # Order routes
│   │   └── user.js        # User routes
│   ├── index.js          # Main server file
│   ├── package.json      # Dependencies and scripts
│   └── .env              # Environment variables
├── .gitignore          # Specifies intentionally untracked files
└── README.md           # This file
```


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at sejal8974@gmail.com.

## 💖 Thanks

Thank you for checking out this project! I hope it's helpful.

---
This README.md file was generated by [readme.ai](https://readme-generator-phi.vercel.app/).
