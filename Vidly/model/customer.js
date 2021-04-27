const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    isGold: {
      type: Boolean,
      required: true,
    },
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    phone: { type: Number, required: true, minlength: 4, maxlength: 10 },
  })
);

function validation(customer) {
  const schema = {
    isGold: Joi.boolean(),
    name: Joi.string().min(3).required(),
    phone: Joi.number().min(4),
  };
  return Joi.validate(customer, schema);
}

module.exports.Customer =Customer;
module.exports.validate = validation;