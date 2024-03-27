// UpdateRecipe.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./updateRecipe.css";

const UpdateRecipe = ({ recipeId, onUpdate }) => {
  const [recipe, setRecipe] = useState(null);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [averageRating, setAverageRating] = useState('');

  // useEffect(() => {
  //   fetchRecipe();
  // }, [recipeId]);

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/recipes/getRecipeByid/${recipeId}`);
      setRecipe(response.data);
      setTitle(response.data.title);
      setIngredients(response.data.ingredients);
      setInstructions(response.data.instructions);
      setCookingTime(response.data.cookingTime);
      setDifficultyLevel(response.data.difficultyLevel);
      setAverageRating(response.data.averageRating);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  const findItem = async e => {
    e.preventDefault();
    fetchRecipe();
  };

  const changeid = (id) => {
    recipeId = id;
  }

  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const updatedRecipe = {
        ...recipe,
        title,
        ingredients,
        instructions,
        cookingTime,
        difficultyLevel,
        averageRating,
      };

      await axios.put(`http://localhost:8080/api/recipes/updateRecipe/${recipeId}`, updatedRecipe)
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
      console.error('Error updating recipe:', error);
    }
  };

  // if (!recipe) return null;

  return (

      <div className="update-recipe-container">
      <h2>Update Recipe</h2>

      {/*  */}

      {/* <h2>Find recipe</h2>
      <form className="find-recipe-form" onSubmit={findItem}>
        <input
          type="number"
          placeholder="Recipe ID"
          value={recipeId}
          onChange={e => changeid(e.target.value)}
          required
        />

        <button type="submit">Find Recipe</button>
      </form>
       */}
      <form className="update-recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
          required
        ></textarea>
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Cooking Time"
          value={cookingTime}
          onChange={e => setCookingTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Difficulty Level"
          value={difficultyLevel}
          onChange={e => setDifficultyLevel(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.1"
          placeholder="Average Rating"
          value={averageRating}
          onChange={e => setAverageRating(e.target.value)}
          required
        />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
