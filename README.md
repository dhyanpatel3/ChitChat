# ChitChat

ChitChat is a real-time chat application that allows users to connect and communicate with each other instantly. It features a modern, responsive interface and a robust backend to support real-time messaging, user authentication, and more.

## Features

  - **User Authentication**: Secure user registration and login functionality.
  - **Real-Time Messaging**: Instantaneous message delivery between users using Socket.io.
  - **Online Status**: See which users are currently online.
  - **User Profiles**: Users can set their own profile picture, name, and bio.
  - **Image Sharing**: Share images in chats, which are stored using Cloudinary.
  - **Unread Message Counts**: See how many unread messages you have from each user.
  - **Search Functionality**: Easily search for other users on the platform.

## Technologies Used

### Frontend

  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A fast build tool for modern web development.
  - **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  - **Socket.io-client**: For real-time, bidirectional event-based communication.
  - **Axios**: A promise-based HTTP client for the browser and Node.js.
  - **React Router**: For declarative routing in React applications.

### Backend

  - **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - **Express**: A fast, unopinionated, minimalist web framework for Node.js.
  - **Socket.io**: Enables real-time, bidirectional and event-based communication.
  - **MongoDB**: A cross-platform document-oriented database program.
  - **Mongoose**: An elegant MongoDB object modeling tool for Node.js.
  - **JWT (JSON Web Tokens)**: For secure user authentication.
  - **Cloudinary**: A cloud-based image and video management service.

## Getting Started

### Prerequisites

  - Node.js and npm (or yarn) installed on your machine.
  - A MongoDB database URI.
  - A Cloudinary account for image storage.

### Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dhyanpatel3/chitchat.git
    cd chitchat
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Create a `.env` file in the `server` directory and add the following:**

    ```
    PORT=5000
    MONGODB_URI=<your_mongodb_uri>
    JWT_SECRET=<your_jwt_secret>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
    ```

4.  **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

5.  **Create a `.env` file in the `client` directory and add the following:**

    ```
    VITE_BACKEND_URL=http://localhost:5000
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd ../server
    npm run server
    ```

2.  **Start the frontend development server:**

    ```bash
    cd ../client
    npm run dev
    ```
