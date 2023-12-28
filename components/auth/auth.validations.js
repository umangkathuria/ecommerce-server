// @ts-check
const Joi = require('joi');

const LOGIN_BODY = Joi.object({
    username: Joi.string().required().min(6).max(50),
    password: Joi.string().required().min(6),
})

module.exports = {
    LOGIN_BODY,
};
