const express = require('express');
const recipeCtrl = require('../Controllers/recipe.controller');
const router = express.Router();

router.get('/', recipeCtrl.getRecipes);
router.get('/recipe/:id', recipeCtrl.getRecipe);
router.get('/types', recipeCtrl.getTypes);
router.post('/', recipeCtrl.addRecipe);
router.patch('/:id', recipeCtrl.updateRecipe);
router.delete('/:id', recipeCtrl.deleteRecipe);

module.exports = router;