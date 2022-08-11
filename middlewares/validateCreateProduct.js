const Joi = require('joi');

const validation = {
  validateBody: async (req, res, next) => {
      const schema = Joi.object({
        name: Joi.string().min(5).required(),
      });
    const { error } = schema.validate(req.body);
    if (error) {
      let status;
      if (error.details[0].type === 'string.min') {
        status = 422;
      }
      if (error.details[0].type === 'any.required') {
        status = 400;
      }
      const messageError = { message: error.details[0].message, code: status };
      next(messageError);
    }
    next();
  },
};

module.exports = validation;