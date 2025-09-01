# Bet Metrics API

Welcome to the **Bet Metrics API**\! This is a REST API designed for managing and analyzing sports betting data, built with Node.js, Fastify, and TypeScript.

Currently, the API supports all CRUD (Create, Read, Update, Delete) operations for bets, using a local JSON file as a data store for rapid development.

## Technologies Used

  * **Node.js**: JavaScript runtime environment.
  * **Fastify**: Web framework for building the API.
  * **TypeScript**: A typed superset of JavaScript.
  * **tsx**: A tool for running TypeScript files directly in development.
  * **tsup**: A bundler for building the project for production.

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

  * **Node.js** (v24 or higher recommended)
  * **NPM** or another package manager

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/rodriguesmarllon/bet-metrics.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd bet-metrics
    ```
3.  Install the project dependencies:
    ```sh
    npm install
    ```

### Environment Configuration

This project includes a default `.env` file for configuration.

Simply ensure the `PORT` variable is set to your desired value within the `.env` file. The default is `3333`.

```env
PORT=3333
```

### Running the Application

You can run the application in development mode, which will automatically restart the server on file changes.

```sh
npm run start:watch
```

After running the command, the server will be live and ready to accept requests on the port you defined (e.g., `http://localhost:3333`).

## API Endpoints

The API is structured under the `/api` prefix and provides the following endpoints for the `bet` resource.

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/bet` | Creates a new bet. |
| `GET` | `/api/bet` | Retrieves a list of all existing bets. |
| `GET` | `/api/bet/:id` | Fetches a single bet by its ID. |
| `PUT` | `/api/bet/:id` | Updates an existing bet. |
| `DELETE` | `/api/bet/:id` | Deletes a bet. |



