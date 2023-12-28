// @ts-check

const { getByUsername } = require("../customers/customers.service")
const crypto = require('crypto');
const config = require('../../config');

/**
 * Use this method to login a user.
 *
 * @param {String} username
 * @param {String} password 
 */
const loginUser = async (username, password) => {
  const hash = crypto.createHmac('sha512', config.secret_key).update(password);
  const hashedPassword = hash.digest('hex');
  const user = await getByUsername(username);
  if (!user) {
    throw new Error('User not found!');
  }

  if (hashedPassword !== user.password) {
    throw new Error('Invalid credentials');
  }
  return true;
}

module.exports = {
  loginUser,
}