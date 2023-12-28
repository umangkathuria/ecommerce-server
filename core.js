
const { mongoConnect, mongoConnection } = require('./database');

exports.connect = ({ mongoUrl, mongoUser, mongoPassword, logger }) =>
  mongoConnect({ url: mongoUrl, username: mongoUser, password: mongoPassword, logger });

exports.mongoConnection = mongoConnection;
