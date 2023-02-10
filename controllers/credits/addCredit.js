const { Credit } = require("../../models/credit");

const addCredit = async (req, res) => {
  const { _id } = req.gamer;
  const newCredit = await Credit.create({ ...req.body, owner: _id });
  res.json({ credit: newCredit });
};

module.exports = addCredit;
