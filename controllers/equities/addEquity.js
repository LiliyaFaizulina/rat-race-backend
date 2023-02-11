const { Equity } = require("../../models/equity");

const addEquity = async (req, res) => {
  const { _id } = req.gamer;
  const newEquity = await Equity.create({ ...req.body, owner: _id });
  res.status(201).json(newEquity);
};

module.exports = addEquity;
