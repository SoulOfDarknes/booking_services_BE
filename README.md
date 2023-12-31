
## Description

Bicycle Booking Services is a distributed system designed to manage bicycle booking services. 
This application allows users to add, view, edit, and delete bicycles, as well as manage bookings and view related statistics.

## Installation
Before installing the application, ensure that the following prerequisites are met:

- Node.js: The application requires Node.js to run. If you don't have Node.js installed, download and install it from Node.js official website. Recommend using the latest LTS version.

- MongoDB: Install MongoDB server locally. Follow the instructions on the MongoDB official website for installation.

- Environment Setup: Create a (.env) file in the root directory of the project. Use the provided (.env.example) as a template and fill in the necessary environment variables.

To get started with the project, clone the repository and install the dependencies:

```bash
git clone [your repository link]
cd [your project folder name]
npm install
```
- Run command

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Testing with Postman

To test the API with Postman:

Install Postman: Download and install Postman from the official website.

Import the API Collection: If an API collection is provided, import it into Postman.

Set Environment Variables: In Postman, set up the environment variables corresponding to your .env settings.

Send Requests: Use Postman to send requests to your API endpoints to test various functionalities like adding, viewing, editing, and deleting bicycles, along with managing bookings and viewing statistics.
### Example

- GET http://localhost:3333/bicycle/statistics
- GET http://localhost:3333/bicycle
- POST http://localhost:3333/bicycle

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
