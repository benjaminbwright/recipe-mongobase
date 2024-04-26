const { Recipe, Ingredient } = require("../");

module.exports = {
  getAllRecipes: async (req, res) => {
    res.send("all the recipes");
  },
  getOneRecipe: async (req, res) => {
    res.send("get single recipe");
  },
  createRecipe: async (req, res) => {
    res.send("create a new recipe");
  },
  updateRecipe: async (req, res) => {
    res.send("update a single recipe");
  },
  deleteRecipe: async (req, res) => {
    res.send("delete a single recipe");
  },
  getRecipesByIngredient: async (req, res) => {
    res.send("get recipes by ingredient");
  },
};
