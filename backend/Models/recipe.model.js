const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    picture: {type: String, required: true},
    ingredients: {type: String, required: true},
    type: {type: String, required: true},
    steps: {type: String, required: true},
    difficulty: {type: Number, required: true},
    confirmed: {type: Boolean, required: true, default: false},
});

module.exports = mongoose.model('Recipe',recipeSchema, 'recipesApp')