// @ts-check

const customersModel = require('./customers.model');

const create = async (username, password) => {
  return customersModel.create({
    username,
    password
  });
}

const getByUsername = async username => {
  return customersModel.findOne({
    username
  }).exec();
}

module.exports = {
  create,
  getByUsername,
}
