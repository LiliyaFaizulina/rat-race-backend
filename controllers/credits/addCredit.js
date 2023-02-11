const { Credit } = require("../../models/credit");

const addCredit = async (req, res) => {
  const { _id } = req.gamer;
  const newCredit = await Credit.create({ ...req.body, owner: _id });
  res.status(201).json(newCredit);
};

module.exports = addCredit;
