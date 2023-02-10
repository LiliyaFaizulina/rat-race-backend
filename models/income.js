const { Schema, model } = require("mongoose");
const Joi = require("joi");

const incomeSchema = new Schema(
  {
    category: {
      type: String,
      enum: ["salary", "real-estate", "small-business", "huge-business"],
      required: true,
    },
    sum: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "gamer",
      required: true,
    },
  },
  { versionKey: false }
);

const addIncomeSchema = Joi.object({
  category: Joi.string()
    .allow("salary", "real-estate", "small-business", "huge-business")
    .required(),
  sum: Joi.number().required(),
});

const updateIncomeSchema = Joi.object({
  sum: Joi.number().required(),
});

const schemas = {
  addIncomeSchema,
  updateIncomeSchema,
};

const Income = model("income", incomeSchema);

module.exports = {
  Income,
  schemas,
};
