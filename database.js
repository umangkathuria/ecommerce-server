const mongoose = require('mongoose');

const defaultLogger = {
  info: console.log,
  error: console.error,
};

exports.mongoConnect = ({ url, username, password, logger = defaultLogger }) => {
  mongoose.connection
    .on('connecting', conn => {
      logger.info('Connecting to MongoDb');
    })
    .on('reconnected', conn => {
      logger.info('Reconnected to MongoDb');
    })
    .on('connected', conn => {
      logger.info('Connected to MongoDb');
    })
    .on('disconnected', () => {
      logger.info('Disconnected from MongoDb');
    })
    .on('error', err => {
      logger.error('Database error:');
      logger.error(err);
    });

  return mongoose.connect(url, {
    user: username,
    pass: password,
  });
};

exports.mongoConnection = mongoose.connection;
