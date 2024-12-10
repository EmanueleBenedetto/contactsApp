# Emanuele's Contacts App

A responsive "Contacts" application built with React. It fetches and displays a list of contacts from JSONPlaceholder and allows you to search through them.

## Prerequisites
- Node.js (version 14 or newer) & npm (version 6 or newer)
- Alternatively ensure you have Docker installed

## Installation & Running

### With npm

1. Clone the repository
    ```bash
    git clone https://github.com/EmanueleBenedetto/contactsApp.git
    cd contacts-app
    ```

2. Install Dependencies:
    ```bash
    npm install --legacy-peer-deps
    npm install web-vitals --legacy-peer-deps
    ```

3. Start the application
    ```
    npm start
    ```

### With Docker

1. Build the Docker image:
    ```bash
    docker build -t contacts-app:latest .
    ```
2. Run the Docker container:
    ```bash
    docker run -p 3000:80 contacts-app:latest
    ```

The application will run at http://localhost:3000 by default. Open this URL in your web browser to view the app.