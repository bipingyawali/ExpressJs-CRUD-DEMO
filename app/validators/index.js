const Joi = require('joi');

const { validate } = require("../utils/validate")

const verifyCategory = require('./categoryValidator');

module.exports = {
    verifyCategory
}
