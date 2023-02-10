const { Equity } = require("../../models/equity");

const addEquity = async (req, res) => {
  const { _id } = req.gamer;
  const newEquity = await Equity.create({ ...req.body, owner: _id });
  res.json({ equity: newEquity });
};

module.exports = addEquity;
