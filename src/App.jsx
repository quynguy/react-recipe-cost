import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeCost from './components/RecipeCost';

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (data) => {
    setIngredients([...ingredients, data]);
  };

  return (
    <div className='React-Recipe-App'>
      <RecipeForm className='InputFormIngredients' onSubmit={addIngredient} />
      <RecipeCost className='InputFormCost' ingredients={ingredients} />
    </div>
  );
};

export default App;
