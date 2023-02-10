const { Income } = require("../../models/income");

const deleteIncome = async (req, res) => {
  const { incomeId } = req.params;
  const result = await Income.findByIdAndRemove(incomeId);
  res.json(result);
};

module.exports = deleteIncome;
