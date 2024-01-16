import React, { useState } from 'react';
import './RecipeApp.css';
import RecipeForm from './RecipeForm';

const RecipeCost = ({ ingredients }) => {
  const [showCost, setShowCost] = useState(false);
  const [showTotalCost, setShowTotalCost] = useState(false);

  const calculateCostPerIngredient = () => {
    setShowCost(true);
  };

  const calculateTotalCostPerIngredient = () => {
    setShowTotalCost(true);
  };

  const clearIngredients = () => {
    window.location.reload();
  }

  return (
    <div className='output-container' >

      <ul className='output-list'>
        {ingredients.map((ingredient, index) => (
          <li key={index} className='output-item'>
            {ingredient.ingredientName}: ${ingredient.costPerUnit}{' '}
            {showCost && `($${(ingredient.costPerUnit * ingredient.quantity).toFixed(2)})`}
          </li>
        ))}
      </ul>

      {showTotalCost && (
        <p className='total-cost'>Total cost of recipe ${ingredients.reduce((total, ingredient) => total + (ingredient.costPerUnit * ingredient.quantity), 0).toFixed(2)}</p>
      )}

      <div className='output-buttons-container'>
        <button className='generate-ingredient-cost' onClick={calculateCostPerIngredient}>Generate Cost </button>
        <button className='calculate-total' onClick={calculateTotalCostPerIngredient}>Calculate Total</button>
        <button className='clear-page' onClick={clearIngredients}>Clear Page</button>
      </div>

    </div>
  );
};

export default RecipeCost;
