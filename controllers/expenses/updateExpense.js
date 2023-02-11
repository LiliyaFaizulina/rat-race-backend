const { Expense } = require("../../models/expense");

const updateExpense = async (req, res) => {
  const { expenseId } = req.params;
  const expense = await Expense.findByIdAndUpdate(expenseId, req.body, {
    new: true,
  });
  res.json(expense);
};

module.exports = updateExpense;
