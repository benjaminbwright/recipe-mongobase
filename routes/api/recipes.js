const recipesRouter = require("express").Router();
const {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipesByIngredient,
} = require("../../controllers/recipeController.js");

recipesRouter.route("/").get(getAllRecipes).post(createRecipe);

recipesRouter
  .route("/:recipeId")
  .get(getOneRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

recipesRouter.get("/:ingredientId", getRecipesByIngredient);

module.exports = recipesRouter;
