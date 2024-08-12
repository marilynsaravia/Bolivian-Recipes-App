import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data/recipes.json';
import { getImageRecipe } from '../utils';

const Recipe = () => {
    
    const { id } = useParams();
    const recipeId = parseInt(id, 10); 

    const recipe = Data.find(recipe => recipe.Id === recipeId);

    if (!recipe) {
        return (
            <div className='w-full h-auto p-4 text-center text-red-500'>
                Receta no encontrada
            </div>
        );
    }

    return (
        <div className='w-full h-auto p-6 bg-gray-50'>
            <div className='w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
                {recipe.Image && (
                    <img
                        className='w-full h-[300px] object-cover'
                        src={getImageRecipe(recipe.Image)}
                        alt={recipe.Title}
                    />
                )}
                <div className='p-6'>
                    <h2 className='text-3xl font-bold mb-4'>{recipe.Title}</h2>
                    <p className='text-lg mb-4 text-gray-700'>{recipe.Description}</p>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='font-semibold text-green-500'>Dificultad: {recipe.Difficulty}</p>
                        <p className='font-semibold text-gray-500'>Porciones: {recipe.Servings}</p>
                    </div>
                    <h3 className='text-2xl font-bold mt-6 mb-2'>Ingredientes</h3>
                    <ul className='list-disc list-inside text-gray-700 mb-6'>
                        {recipe.Ingredients.map((ingredient, index) => (
                            <li key={index} className='mb-2'>{ingredient}</li>
                        ))}
                    </ul>
                    <h3 className='text-2xl font-bold mt-6 mb-2'>Preparación</h3>
                    <ol className='list-decimal list-inside text-gray-700'>
                        {recipe.Preparation.map((step, index) => (
                            <li key={index} className='mb-2'>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
