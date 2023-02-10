const { ctrlWrapper } = require("../../helpers");
const getIncome = require("./getIncome");
const addIncome = require("./addIncome");
const updateIncome = require("./updateIncome");
const deleteIncome = require("./deleteIncome");

module.exports = {
  getIncome: ctrlWrapper(getIncome),
  addIncome: ctrlWrapper(addIncome),
  updateIncome: ctrlWrapper(updateIncome),
  deleteIncome: ctrlWrapper(deleteIncome),
};
