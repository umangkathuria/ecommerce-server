// @ts-check

const jwt = require('jsonwebtoken');
const { secret_key: secretKey } = require('../config');

module.exports = () => (req, res, next) => {
  const token = req.get('x-access-token')
  || req.body.token
  || (req.get('Authorization')?.startsWith('Bearer ') ? req.get('Authorization')?.replace('Bearer ', '') : undefined);
  if (!token) {
    return res.status(400).json({
      success: false,
      error: 'No token provided!'
    });
  }
  try {
    jwt.verify(token, secretKey);
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token!',
    });
  }
}
