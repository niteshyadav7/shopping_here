# ShopifyX: MERN E-Commerce Project with Node.js, Nodemailer, and JWT Authentication

Welcome to ShopifyX, a feature-rich e-commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project replicates the user experience of popular e-commerce platforms like Flipkart and includes advanced features such as JWT authentication and Nodemailer integration.

## Features

- *Product Catalog:* Display a wide range of products with detailed information and images.

- *User Authentication & Profiles:* Implement secure user registration and login with JSON Web Token (JWT) authentication. Users can maintain profiles, track orders, and update personal information.

- *Shopping Cart & Checkout:* Enable seamless shopping with an intuitive cart system. Users can add, modify, and purchase products securely.

- *Search & Filters:* Enhance user experience with search functionality and advanced filtering options based on categories, price ranges, and more.

- *Responsive Design:* Develop a responsive user interface using React, ensuring consistent and engaging experiences on all devices.

- *Order Management:* Allow users to track their orders and receive email notifications at different stages using Nodemailer.

## Tech Stack

- Frontend: React, Redux (State Management), HTML, CSS, Bootstrap
- Backend: Node.js, Express.js (API Development), MongoDB (Database)
- Authentication: JSON Web Tokens (JWT)
- Email Notifications: Nodemailer for sending order and user-related emails
- Deployment: Heroku (Frontend), Heroku or AWS (Backend)

## Installation

1. Clone the repository:git clone https://github.com/niteshyadav7/shopping_here

2. Install frontend dependencies and start the React app:

* cd frontend
* npm install
* npm start

3. Install backend dependencies and start the Express server:
  
* cd backend
* npm install
* npm start
  
4. Create a `.env` file in the `backend` folder and add your JWT secret and email credentials:

JWT_SECRET=your_jwt_secret
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password

5. Access the app in your browser at `http://localhost:3000`.

## Future Enhancements

- Implement payment gateways for secure transactions.
- Add user reviews and ratings to products.
- Integrate social media sharing features for products.

## Acknowledgements

Thanks to the open-source community for the tools and libraries used in this project.

---

Contributions in the form of pull requests or issue reports are welcomed. Enjoy coding!
