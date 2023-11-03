# React E-shopping Cart App

This is a simple React application for a product cart that allows users to browse and add products to their cart. It utilizes React Router for navigation and Redux for state management.

## Installation

To get started with the application, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/FasttrackNishant/EcomZY.git
   ```

2. Change your working directory to the project folder:

   ```bash
   cd EcomZY
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application should now be running locally at [http://localhost:3000](http://localhost:3000).

## Usage

The application has two main pages:

1. **Home Page:** This page displays a list of products fetched from the [Fake Store API](https://fakestoreapi.com/products). Users can add products to their cart from this page.

2. **Cart Page:** Users can view the items in their cart, remove items, and proceed to checkout from this page.

## Components

### `App.js`

The main component that sets up the application's structure. It includes routing for the Home and Cart pages.

### `cartSlice.js`

A Redux slice that manages the state of the shopping cart. It includes actions for adding and removing items from the cart.

### `store.js`

Configures the Redux store with the cart slice.

### `Home.js`

The Home page component that fetches and displays products from the Fake Store API. Users can add products to their cart from this page.

### `Cart.js`

The Cart page component that displays the items in the user's cart. Users can remove items and proceed to checkout from this page.

### `Product.js`

A component for displaying individual products on the Home page. Users can add or remove products from their cart from this component.

### `Navbar.js`

The navigation bar component that provides links to the Home and Cart pages. It also displays the number of items in the user's cart.

### `CartItem.js`

A component for displaying individual items in the cart on the Cart page. Users can remove items from their cart from this component.

## Technologies Used

- React
- React Router
- Redux Toolkit
- Fetch API for data retrieval
- React Hot Toast for toast notifications

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.

## Author

Nishant Patil 

If you have any questions or issues, please feel free to contact me at devnishant63@gmail.com
