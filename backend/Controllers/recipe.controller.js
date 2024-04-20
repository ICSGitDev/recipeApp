const Recipe = require('../Models/recipe.model');

const recipeCtrl = {};

//GET all

recipeCtrl.getRecipes = async (req,res) => {
    const recipes = await Recipe.find()
    .then ((data) => res.json(data))
    .catch((err) => console.error(err));
}

//GET types

recipeCtrl.getTypes = async (req,res) => {
    await Recipe.find().distinct('type')
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
}

//GET by ID

recipeCtrl.getRecipe = async (req,res) =>{
    const recipe = await Recipe.findById(req.params.id)
    .then((data) =>{
        if(data!=null) res.json(data)
        else res.json({status: 'Recipe doesnt exist'})
    })
    .catch(err => console.log(err))
}

//PUT

recipeCtrl.addRecipe = async (req,res) => {

    const myRecipe = new Recipe(req.body);

    await myRecipe.save()
    .then(() => 
res.json({status: 'Recipe Inserted Successfully'}))
.catch(err => res.send(err.message));
}

// DELETE by ID

recipeCtrl.deleteRecipe = async (req, res) => {

    await Recipe.findByIdAndDelete(req.params.id)
    .then((data) =>
    {if(data!=null) res.json({status: 'Recipe Successfully Deleted'})
    
    else res.json({status: 'Recipe doesnt exist'})
    })
    .catch(err => res.send(err.message));
    }

//Patch by ID

recipeCtrl.updateRecipe = async (req, res) => {
    const recipe = req.body;
    await Recipe.findByIdAndUpdate(
    req.params.id,
    {$set: recipe},
    {new: true})
    .then((data) =>
    {
    
    if(data!=null) res.json({status: 'Recipe Successfully Updated',data})
    
    else res.json({status: 'Recipe doesnt exist'})
    })
    .catch(err => res.send(err.message));
    }


//Export

module.exports = recipeCtrl;