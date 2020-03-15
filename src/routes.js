const express = require("express");
const DevContrroler = require("./controllers/DevController");

const routes = express.Router();

routes.post("/devs", DevContrroler.store);

module.exports = routes;
