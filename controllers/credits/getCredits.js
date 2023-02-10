const { Credit } = require("../../models/credit");

const getCredits = async (req, res) => {
  const { _id } = req.gamer;

  const credits = Credit.find({ owner: _id });
  res.json({ credits });
};

module.exports = getCredits;
