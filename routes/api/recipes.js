const recipesRouter = require("express").Router();

recipesRouter.get("/", async (req, res) => {
  res.send("all the recipes");
});

recipesRouter.get("/:recipeId", async (req, res) => {
  res.send("get single recipe");
});

recipesRouter.get("/:ingredientId", async (req, res) => {
  res.send("get recipes by ingredient");
});

recipesRouter.post("/", async (req, res) => {
  res.send("create a new recipe");
});

recipesRouter.put("/:recipeId", async (req, res) => {
  res.send("update a single recipe");
});

recipesRouter.delete("/:recipeId", async (req, res) => {
  res.send("delete a single recipe");
});

module.exports = recipesRouter;
