import React, { useState, useEffect } from 'react';
import { getImageRecipe } from '../utils';
import { HeartIcon } from '@heroicons/react/24/solid'; 
import { Link } from 'react-router-dom';

const Recipes = ({ recipes }) => {

    const [favorites, setFavorites] = useState([]); 

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const toggleFavorite = (recipeId) => {
        let updatedFavorites;
        if (favorites.includes(recipeId)) {
            updatedFavorites = favorites.filter(id => id !== recipeId);
        } else {
            updatedFavorites = [...favorites, recipeId];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const getDifficultyClasses = (difficulty) => {
        switch (difficulty) {
            case 'Fácil':
                return 'bg-green-300 text-green-800';
            case 'Media':
                return 'bg-yellow-200 text-yellow-800';
            case 'Difícil':
                return 'bg-red-300 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-3'>
            {recipes.map((recipe) => (
                <div key={recipe.Id} className='bg-white rounded-md shadow-md flex flex-col relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                    <div className='w-full h-[200px] overflow-hidden relative'>
                        <img 
                            className='w-full h-full object-cover rounded-t-md' 
                            src={getImageRecipe(recipe.Image)} 
                            alt={`Imagen de ${recipe.Title}`} 
                        />
                        <button
                            onClick={() => toggleFavorite(recipe.Id)}
                            className={`absolute top-2 right-2 p-2 rounded-md ${favorites.includes(recipe.Id) ? 'text-rose-600' : 'text-slate-200/30'} hover:text-rose-700 transition-colors duration-300`}
                            aria-label="Agregar a favoritos"
                        >
                            <HeartIcon className='w-8 h-8' />
                        </button>
                    </div>
                    <div className='px-6 py-4 flex justify-between items-center'>
                        <small className={`px-3 py-1 rounded-md uppercase ${getDifficultyClasses(recipe.Difficulty)}`}>{recipe.Difficulty}</small>
                        <small className='text-slate-700'>Porciones: {recipe.Servings}</small>
                    </div>
                    <h3 className='text-2xl font-bold px-6 mb-2'>{recipe.Title}</h3>
                    <p className='text-base px-6 mb-4 text-justify flex-grow'>{recipe.Description}</p>
                    <div className='px-6 pb-4 mt-auto'>
                        <Link to={`/recipe/${recipe.Id}`}>
                            <button className='bg-green-500 py-2 px-4 rounded-md hover:bg-green-400 text-white shadow-md'>
                                Ver receta
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recipes;
