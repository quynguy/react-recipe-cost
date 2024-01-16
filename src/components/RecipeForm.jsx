// src/components/RecipeForm.js
import React from 'react';
import RecipeCost from './RecipeCost';
import { useForm } from 'react-hook-form';

const RecipeForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className='input-container'>
        <h1 className='text'>Dish Dollars</h1>
        <p className='text-p'> Your go-to app for generating precise per-unit and total recipe costs. </p>
        <div className='input-form'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='input-ingredient'> 
              <label for='ingredient-name'> Ingredient
                <input className='input' placeholder="Ingredient Name" type='text' {...register('ingredientName')}/>
              </label>
            </div>

            <div className='input-case-amount'>
              <label for='case-cost'> Case Cost 
                <input className='input' placeholder="Cost Per Case" type="number" step="0.01" {...register('costPerUnit')}/>
              </label>
            </div>

            <div className='input-quantity'>
              <label form='quantity-amount'> Quantity    
                <input className='input' placeholder="Quantity Per Case" type="number" step="1" {...register('quantity', {valueAsNumber: true})} />
              </label>
            </div>

            <div className='input-button'> 
              <button className='add-button' type="submit">Add Ingredient</button>
            </div>

          </form>
        </div>
    </div>
  );
};

export default RecipeForm;
