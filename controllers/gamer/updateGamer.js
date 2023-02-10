const { Gamer } = require("../../models/gamer");
const { HttpError } = require("../../helpers");

const updateGamer = async (req, res) => {
  const { _id } = req.gamer;
  const updatedGamer = await Gamer.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  if (!updatedGamer) {
    throw HttpError(404, "Gamer not found");
  }

  res.json({
    gamer: {
      id: updatedGamer._id,
      name: updatedGamer.name,
      position: updatedGamer.position,
      dream: updatedGamer.dream,
      dreamCost: updatedGamer.dreamCost,
      debt: updatedGamer.debt,
      children: updatedGamer.children,
    },
  });
};

module.exports = {
  updateGamer,
};
