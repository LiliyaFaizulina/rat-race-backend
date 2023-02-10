const { Schema, model } = require("mongoose");
const Joi = require("joi");

const creditSchema = new Schema(
  {
    name: {
      type: String,
    },
    cost: {
      type: Number,
    },
    monthlyFee: {
      type: Number,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "gamer",
      required: true,
    },
  },
  { versionKey: false }
);

const updateSchema = Joi.object({
  cost: Joi.number().required(),
});

const addCredit = Joi.object({
  name: Joi.string().required(),
  cost: Joi.number().required(),
  monthlyFee: Joi.number().required(),
});

const schemas = {
  updateSchema,
  addCredit,
};

const Credit = model("credit", creditSchema);

module.exports = {
  Credit,
  schemas,
};
