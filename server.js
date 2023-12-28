const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connect } = require('./core');
app.use(bodyParser.json());

const {
  mongo_username: mongoUsername,
  mongo_password: mongoPassword,
  server_port: serverPort,
} = require('./config');

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@ecommercecluster01.c5vjk9f.mongodb.net/?retryWrites=true&w=majority`;
connect({
  mongoUrl: uri,
  mongoUser: mongoUsername,
  mongoPassword: mongoPassword,
}).then(() => {
  app.get('/healthcheck', (req, res) => {
    res.json({
      success: true,
      message: 'Server is running.'
    })
  });

  app.listen(serverPort, () => {
    console.log(`SERVER STARTED ON PORT ${serverPort}`);
  })
}).catch(error => {
  console.error("Server startup failed: ", error);
});

process.on('unhandledRejection', error => console.error('unhandledRejection', error));
process.on('uncaughtException', error => console.error('uncaughtException', error));
