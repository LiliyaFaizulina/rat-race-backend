const { Income } = require("../../models/income");

const getIncome = async (req, res) => {
  const { _id } = req.gamer;

  const allIncome = Income.find({ owner: _id });
  res.json({ allIncome });
};

module.exports = getIncome;
