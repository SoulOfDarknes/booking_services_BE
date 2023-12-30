
## Description

Bicycle Booking Services is a distributed system designed to manage bicycle booking services. 
This application allows users to add, view, edit, and delete bicycles, as well as manage bookings and view related statistics.

## Installation
Before installing the application, ensure that the following prerequisites are met:

- Node.js: The application requires Node.js to run. If you don't have Node.js installed, download and install it from Node.js official website. Recommend using the latest LTS version.

- MongoDB: Install MongoDB server locally. Follow the instructions on the MongoDB official website for installation.

- Environment Setup: Create a (.env) file in the root directory of the project. Use the provided (.env.defaults) as a template and fill in the necessary environment variables.

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Deploy
#### New API version deploy to Docker Hub
Go to the branch that was chosen as branch for new version build: <br/>
```git checkout branch-for-build```<br/>

Tag this branch with new server version: <br/>
```git tag sv0.0.5```<br/>

Push branch and tag to the origin: <br/>
```git push origin branch-for-build``` <br/>
```git push --tags```<br/>

#### Deploy latest version of build to AWS
Remove local branch "deploy-server" if it exists <br/>
```git branch -D deploy-server``` <br/>

Create and push special branch "deploy-server" to the server: <br/>
```git checkout -b deploy-server```<br/>
```git push origin deploy-server --force```<br/>