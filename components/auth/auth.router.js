// @ts-check
const express = require('express');
const jwt = require('jsonwebtoken');
const { jwt_expiration_time: jwtExpirationTime, secret_key: secretKey } = require('../../config');

const validateBody = require('../../middlewares/validations');

const router = express.Router();
const { LOGIN_BODY } = require('./auth.validations')

const controller = require('./auth.controller');

router.route('/authenticate')
.post(
  validateBody(LOGIN_BODY),
  ({ body }, res) => {
    const { username, password } = body;
    controller.loginUser(username, password)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Login successful',
        token: jwt.sign({
          username,
          password,
        }, secretKey, { expiresIn: jwtExpirationTime  } )
      });
    }).catch((error) => {
      res.status(400).json({
        success: false,
        message: error.message || 'Login failed due to unexpected error.',
      })
    })
});

module.exports = router;
