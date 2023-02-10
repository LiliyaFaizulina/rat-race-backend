const { Schema, model } = require("mongoose");
const Joi = require("joi");

const gamerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for gamer"],
    },
    password: {
      type: String,
      required: [true, "Set password for gamer"],
    },
    position: {
      type: String,
      default: "Job title",
    },
    dream: {
      type: String,
      default: "Your dream",
    },
    dreamCost: {
      type: Number,
      default: 0,
    },
    debt: {
      type: Number,
      default: 0,
    },
    children: {
      type: Number,
      default: 0,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false }
);

const authSchema = Joi.object({
  name: Joi.string().required().min(2).max(10),
  password: Joi.string().required().min(2).max(10),
});

const updateGamer = Joi.object({
  position: Joi.string(),
  debt: Joi.number(),
  children: Joi.number(),
  dream: Joi.string(),
  dreamCost: Joi.string(),
});

const schemas = {
  authSchema,
  updateGamer,
};

const Gamer = model("gamer", gamerSchema);

module.exports = {
  Gamer,
  schemas,
};
