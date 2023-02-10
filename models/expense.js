const { Schema, model } = require("mongoose");
const Joi = require("joi");

const expenseSchema = new Schema(
  {
    category: {
      type: String,
      enum: [
        "utility-bills",
        "rent",
        "meal",
        "education",
        "training",
        "clothes",
        "gasoline",
        "telephone",
        "children",
        "custody",
      ],
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

const addExpenseSchema = Joi.object({
  category: Joi.string()
    .allow(
      "utility-bills",
      "rent",
      "meal",
      "education",
      "training",
      "clothes",
      "gasoline",
      "telephone",
      "children",
      "custody"
    )
    .required(),
  sum: Joi.number().required(),
});

const updateExpenseSchema = Joi.object({
  sum: Joi.number().required(),
});

const schemas = {
  addExpenseSchema,
  updateExpenseSchema,
};

const Expense = model("expense", expenseSchema);

module.exports = {
  Expense,
  schemas,
};
