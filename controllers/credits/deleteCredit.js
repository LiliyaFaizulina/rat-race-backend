const { Credit } = require("../../models/credit");

const deleteCredit = async (req, res) => {
  const { creditId } = req.params;
  const result = await Credit.findByIdAndRemove(creditId);
  res.json(result);
};

module.exports = deleteCredit;
