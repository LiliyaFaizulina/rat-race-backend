const { Equity } = require("../../models/equity");

const deleteEquity = async (req, res) => {
  const { equityId } = req.params;
  const result = await Equity.findByIdAndRemove(equityId);
  res.json(result);
};

module.exports = deleteEquity;
