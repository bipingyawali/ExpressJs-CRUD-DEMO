const Joi = require('joi');

const { validate } = require('../utils/validate');

const schema = Joi.object({
    title: Joi.string().label('Title'),
    content: Joi.string().label('Content')
})

validateCategoryForm = (req, res, next) => {
    return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err))
};

const verifyCategory = {
    validateCategoryForm: validateCategoryForm
}

module.exports = verifyCategory