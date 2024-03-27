// RecipeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/recipes/getAllRecipes');
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8080/api/recipes/deleteRecipe/${id}`);
      fetchRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            
            <h3>{recipe.title}    </h3>
            <h3>recipeId:{recipe.id}</h3>
            <p>Ingredients :{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Difficulty Level: {recipe.difficultyLevel}</p>
            <p>Average Rating: {recipe.averageRating}</p>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
