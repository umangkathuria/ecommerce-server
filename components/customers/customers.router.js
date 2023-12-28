// @ts-check
const express = require('express');
const validateBody = require('../../middlewares/validations');

const router = express.Router();
const { REGISTER_BODY } = require('./customers.validations')

const controller = require('./customers.controller');

router.route('/register')
/**
 * @api {post} /register Register
 * @apiName Registeration or Signup API
 * @apiGroup users
 * @apiDescription Use this API for registering a new user
 *
 * @apiParam (Body variable) {String} username Username
 * @apiParam (Body variable) {String} password Password
 *
 * @apiUse CommonErrors
 */
.post(
  validateBody(REGISTER_BODY),
  ({ body }, res) => {
    const { username, password } = body;
    controller.registerUser(username, password)
    .then(() => {
      res.json({
        success: true,
        message: "Registeration succesful",
      })
    })
    .catch((error) => {
      res.json({
        success: false,
        message: "Registeration failed",
        error: error.message || 'Unexpected error while registering the user. Please contact support.',
      })
    })
    
  });

module.exports = router;