# eCommerce Server
## Simple Node.JS, Express Based Sample Server


This is a simple NodeJS based server. It uses Express.JS for route management, and MongoDB for all DB related needs. It can be used by any frontend framework capable to consume REST APIs.


## Routes

- Healthcheck route: For ensuring that the server is running. Can be acccessed by /healthcheck
- Authentication route: For performing any login action. This route returns a JWT token on successful authentication. Can be accessed by /authenticate 
- Sign up or Register route: For registering any new user, you can use this route. Can be accessed by /register
- Product List: For listing products. This requires JWT token to be sent with the request. Can be accessed by /products/list


## Tech

This project uses a number of open source projects to work properly:

- node.js - evented I/O for the backend
- Express - fast node.js network app framework
- mongodb - source-available, cross-platform, document-oriented database program
- axios - Promise based HTTP client for the browser and node.js.

And of course others as mentioned in the package.json file.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
npm install
npm run dev
```
