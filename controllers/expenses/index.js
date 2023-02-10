const { ctrlWrapper } = require("../../helpers");
const getExpenses = require("./getExpenses");
const addExpense = require("./addExpense");
const updateExpense = require("./updateExpense");
const deleteExpense = require("./deleteExpense");

module.exports = {
  getExpenses: ctrlWrapper(getExpenses),
  addExpense: ctrlWrapper(addExpense),
  updateExpense: ctrlWrapper(updateExpense),
  deleteExpense: ctrlWrapper(deleteExpense),
};
