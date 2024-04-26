const db = require("../config/connection");
const { Recipe, Ingredient } = require("../models");
const { recipes } = require("../seeds/data");

db.once("open", async () => {
  await Recipe.deleteMany({});
  await Ingredient.deleteMany({});

  console.log("collections cleared.");

  recipes.forEach(async (recipe) => {
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
  });

  console.log("collections seeded");
});
