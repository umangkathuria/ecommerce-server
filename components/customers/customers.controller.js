// @ts-check

const { create } = require("./customers.service")
const crypto = require('crypto');
const config = require('../../config');

/**
 * Use this method to register a new user. It checks for a duplicate user.
 *
 * @param {String} username
 * @param {String} password 
 */
const registerUser = async (username, password) => {
  const hash = crypto.createHmac('sha512', config.secret_key).update(password);
  const hashedPassword = hash.digest('hex');
  await create(username, hashedPassword)
    .catch(error => {
      if (error.code === 11000) {
        throw new Error('User already exists for this email address.');
      }
    });
}

module.exports = {
  registerUser,
}