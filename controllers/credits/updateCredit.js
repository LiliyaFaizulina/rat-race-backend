const { Credit } = require("../../models/credit");

const updateCredit = async (req, res) => {
  const { creditId } = req.params;
  const credit = await Credit.findByIdAndUpdate(creditId, req.body, {
    new: true,
  });
  res.json({ credit });
};

module.exports = updateCredit;
