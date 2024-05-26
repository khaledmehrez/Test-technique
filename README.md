# Test-technique
# Express.js City API

This is a simple Express.js API that returns the names of French cities based on a given postal code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:
    ```
    git clone https://github.com/khaledmehrez/Test-technique.git
    ```

2. Install the dependencies:
    ```
    cd Test-technique
    npm install
    ```

3. Start the server:
    ```
    npm start:dev
    ```

## Usage

The API has a single endpoint:

- `GET /cities?zipcode=<zipcode>`: Returns a JSON object with the names of the cities that correspond to the given French postal code.

## Built With

- Express.js - The web framework used
- Axios - Promise based HTTP client for the browser and node.js

