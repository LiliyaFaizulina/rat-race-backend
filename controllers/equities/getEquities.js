const { Equity } = require("../../models/equity");

const getEquities = async (req, res) => {
  const { _id } = req.gamer;

  const equities = Equity.find({ owner: _id });
  res.json({ equities });
};

module.exports = getEquities;
