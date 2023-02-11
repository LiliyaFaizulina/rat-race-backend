const { Expense } = require("../../models/expense");

const getExpenses = async (req, res) => {
  const { _id } = req.gamer;

  const expenses = await Expense.find({ owner: _id });
  res.json(expenses);
};

module.exports = getExpenses;
