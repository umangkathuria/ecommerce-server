// @ts-check
const express = require('express');
const validateBody = require('../../middlewares/validations');

const router = express.Router();
const { REGISTER_BODY } = require('./customers.validations')

const controller = require('./customers.controller');

router.route('/register')
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