const { ctrlWrapper } = require("../../helpers");
const getEquities = require("./getEquities");
const addEquity = require("./addEquity");
const updateEquity = require("./updateEquity");
const deleteEquity = require("./deleteEquity");

module.exports = {
  getEquities: ctrlWrapper(getEquities),
  addEquity: ctrlWrapper(addEquity),
  updateEquity: ctrlWrapper(updateEquity),
  deleteEquity: ctrlWrapper(deleteEquity),
};
