const express = require("express");
const DevContrroler = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

const routes = express.Router();

routes.get("/devs", DevContrroler.index);
routes.post("/devs", DevContrroler.store);

routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
