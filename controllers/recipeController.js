const { Recipe, Ingredient } = require("../models/index.js");

module.exports = {
  getAllRecipes: async (req, res) => {
    const recipes = await Recipe.find({}).populate({
      path: "ingredients",
      populate: "ingredient",
    });
    res.send(recipes);
  },
  getOneRecipe: async (req, res) => {
    const recipe = await Recipe.findOne({
      _id: req.params.recipeId,
    });
    res.send(recipe);
  },
  createRecipe: async (req, res) => {
    const recipe = req.body;
    const newRecipe = new Recipe({
      name: recipe.name,
      instructions: recipe.instructions,
    });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const { ingredient, amount, unit } = recipe.ingredients[i];

      let newIngredient;

      newIngredient = await Ingredient.findOne({
        name: ingredient,
      });

      if (!newIngredient) {
        newIngredient = await Ingredient.create({
          name: ingredient,
        });
      }

      newRecipe.ingredients.push({
        ingredient: newIngredient._id,
        amount,
        unit,
      });
    }

    newRecipe.save();
    res.json(newRecipe);
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
