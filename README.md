# Cryptocurrency Tracker Backend

## Overview
This backend application is part of a full-stack cryptocurrency tracker project built using the MERN stack. It provides an API for fetching live cryptocurrency data and storing historical price snapshots.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/crypto-tracker.git
   cd crypto-tracker/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection:
   - Open `src/config/db.js` and update the MongoDB URI as needed.

4. Start the server:
   ```
   npm start
   ```

The server will run on `http://localhost:5000`.

## API Endpoints

### GET /api/coins
Fetches the current cryptocurrency data.

### POST /api/history
Stores a snapshot of current prices in the database.

### GET /api/history/:coinId (optional)
Fetches historical price data for a specified coin.

## Additional Notes
- Ensure MongoDB is running before starting the server.
- You can use tools like Postman to test the API endpoints.

## Deployment
Refer to the [DEPLOYMENT.md](../deployment/DEPLOYMENT.md) for instructions on deploying the backend application.

## Sharing
Refer to the [SHARING.md](../deployment/SHARING.md) for methods to share the application with others.