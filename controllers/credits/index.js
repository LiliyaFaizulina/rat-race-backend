const { ctrlWrapper } = require("../../helpers");
const getCredits = require("./getCredits");
const addCredit = require("./addCredit");
const updateCredit = require("./updateCredit");
const deleteCredit = require("./deleteCredit");

module.exports = {
  getCredits: ctrlWrapper(getCredits),
  addCredit: ctrlWrapper(addCredit),
  updateCredit: ctrlWrapper(updateCredit),
  deleteCredit: ctrlWrapper(deleteCredit),
};
