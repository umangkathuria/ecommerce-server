const Joi = require('joi');

const DEFAULT_VALIDATION_OPTIONS = Object.freeze({
  abortEarly: false,
  allowUnknown: false,
  convert: true,
});

/**
 * 
 * @param {object} data
 * @param {Joi.Schema} schema
 * @param {Joi.ValidationOptions} options
 * @returns
 */
const validateBody = (data, schema, options) => {
  const {
    error
  } = schema.validate(data, options)
  if (error) {
    return error.details[0].message;
  }
  return null;
};


const getErrorMessage = message => {
  if (!message) {
    return null;
  }
  if (typeof message === 'string') {
    return message;
  }
  if (!message.some(errorMessage => errorMessage === null)) {
    return Array.from(new Set(message)).join(', ');
  }

  return null;
};


module.exports = (schema, options = DEFAULT_VALIDATION_OPTIONS) => (req, res, next) => {
  if (!schema) {
    throw new TypeError('Schema is required in order to perform validation');
  }
  const message = validateBody(req.body, schema, options);
  const error = getErrorMessage(message);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  return next();
};