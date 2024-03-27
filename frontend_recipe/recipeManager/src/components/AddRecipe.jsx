
// AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';
import "./AddRecipe.css";

const AddRecipe = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [averageRating, setAverageRating] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newRecipe = {
        title,
        ingredients,
        instructions,
        cookingTime,
        difficultyLevel,
        averageRating,
      };
      await axios.post('http://localhost:8080/api/recipes/createRecipe', newRecipe)
      .then(response => {
        console.log(response);
        setTitle('');
        setIngredients('');
        setInstructions('');
        setCookingTime('');
        setDifficultyLevel('');
        setAverageRating('');
      })
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Add Recipe</h2>

        <form className="add-recipe-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ingredients"
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
            />
            <input
                type="text"
                placeholder="Instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
            />
            <input
                type="number"
                placeholder="Cooking Time"
                value={cookingTime}
                onChange={e => setCookingTime(e.target.value)}
            />
            <input
                type="text"
                placeholder="Difficulty Level"
                value={difficultyLevel}
                onChange={e => setDifficultyLevel(e.target.value)}
            />
            <input
            // float type
                type='number'
                placeholder="Average Rating"
                value={averageRating}
                onChange={e => setAverageRating(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>


    </div>
  );
};

export default AddRecipe;
