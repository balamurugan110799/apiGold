const routers = require("express").Router();
const {
  addGold,
  getGold,
  updateGold,
  deleteGold,
} = require("../controller/goldController");

const {getAllGoldCal} = require("../controller/dashboardGold")

routers.route("/getGoldCal").get(getAllGoldCal)

routers.route("/addGold").post(addGold);
routers.route("/getGold").get(getGold);
routers.route("/updateGold/:id").put(updateGold);
routers.route("/deleteGold/:id").delete(deleteGold);


module.exports = routers;
