const { Expense } = require("../../models/expense");

const deleteExpense = async (req, res) => {
  const { expenseId } = req.params;
  const result = await Expense.findByIdAndRemove(expenseId);
  res.json(result);
};

module.exports = deleteExpense;
