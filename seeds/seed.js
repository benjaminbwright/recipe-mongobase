const db = require("../config/connection");
const { Recipe, Ingredient } = require("../models");
const { recipes } = require("../seeds/data");

db.once("open", async () => {
  await Recipe.deleteMany({});
  await Ingredient.deleteMany({});

  recipes.forEach(async (recipe) => {
    const newRecipe = new Recipe({
      name: recipe.name,
      instructions: recipe.instructions,
    });

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const { ingredient, amount, unit } = recipe.ingredients[i];

      const { _id: ingredientId } = await Ingredient.create({
        name: ingredient,
      });

      newRecipe.ingredients.push({
        ingredient: ingredientId,
        amount,
        unit,
      });
    }

    newRecipe.save();
  });

  process.exit(0);
});
