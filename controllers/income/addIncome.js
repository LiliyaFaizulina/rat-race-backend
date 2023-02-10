const { Income } = require("../../models/income");

const addIncome = async (req, res) => {
  const { _id } = req.gamer;
  const newIncome = await Income.create({ ...req.body, owner: _id });
  res.json({ income: newIncome });
};

module.exports = addIncome;
