const { Schema, model } = require("mongoose");
const Joi = require("joi");

const equitySchema = new Schema(
  {
    code: {
      type: String,
      enum: ["UKT", "KRS", "KCHG", "YKHZ", "DR"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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
  code: Joi.string().allow("UKT", "KRS", "KCHG", "YKHZ", "DR").required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

const addEquity = Joi.object({
  code: Joi.string().allow("UKT", "KRS", "KCHG", "YKHZ", "DR").required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

const schemas = {
  updateSchema,
  addEquity,
};

const Equity = model("equity", equitySchema);

module.exports = {
  Equity,
  schemas,
};
