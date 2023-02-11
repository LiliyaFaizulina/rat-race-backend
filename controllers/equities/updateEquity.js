const { Equity } = require("../../models/equity");

const updateEquity = async (req, res) => {
  const { equityId } = req.params;
  const equity = await Equity.findByIdAndUpdate(equityId, req.body, {
    new: true,
  });
  res.json(equity);
};

module.exports = updateEquity;
