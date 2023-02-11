const { Expense } = require("../../models/expense");

const addExpense = async (req, res) => {
  const { _id } = req.gamer;
  const newExpense = await Expense.create({ ...req.body, owner: _id });
  res.status(201).json(newExpense);
};

module.exports = addExpense;
