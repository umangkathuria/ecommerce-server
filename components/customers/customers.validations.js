// @ts-check
const Joi = require('joi');

const REGISTER_BODY = Joi.object({
	username: Joi.string().required().min(6).max(50),
	password: Joi.string().required().min(6),
})

module.exports = {
	REGISTER_BODY,
};