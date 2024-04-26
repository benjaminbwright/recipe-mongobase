const apiRouter = require("express").Router();
const recipesRouter = require("./recipes");

apiRouter.use("/recipes", recipesRouter);

module.exports = apiRouter;
