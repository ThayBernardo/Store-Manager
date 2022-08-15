const Joi = require('joi');

const validateUpdateSale = {
  validateBody: async (req, res, next) => {
    const schema = Joi.object().keys({
      productId: Joi.number().required(),
      quantity: Joi.number().min(1).required(),
    });
    const array = Joi.array().items(schema);
    const { error } = array.validate([req.body]);
    // console.log(req.body);
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

module.exports = validateUpdateSale;