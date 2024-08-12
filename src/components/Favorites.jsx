import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/recipes.json';
import { getImageRecipe } from '../utils';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const favoriteRecipes = Data.filter(recipe => favorites.includes(recipe.Id));

    const getDifficultyClasses = (difficulty) => {
        switch (difficulty) {
            case 'Fácil':
                return 'bg-green-300 text-green-800';
            case 'Media':
                return 'bg-yellow-200 text-yellow-800';
            case 'Difícil':
                return 'bg-red-300 text-red-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    return (
        <div className='w-full flex flex-col gap-12 p-3'>
            <h2 className='text-3xl text-center font-bold mb-6'>Mis Recetas Favoritas</h2>
            {favoriteRecipes.length > 0 ? (
                <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {favoriteRecipes.map(recipe => (
                        <div key={recipe.Id} className='bg-white rounded-md shadow-md flex flex-col relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                            <div className='w-full h-[200px] overflow-hidden relative'>
                                <img
                                    className='w-full h-full object-cover rounded-t-md'
                                    src={getImageRecipe(recipe.Image)}
                                    alt={recipe.Title}
                                />
                            </div>
                            <div className='px-6 py-4 flex justify-between items-center'>
                                <small className={`px-3 py-1 rounded-md uppercase ${getDifficultyClasses(recipe.Difficulty)}`}>
                                    {recipe.Difficulty}
                                </small>
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
            ) : (
                <p className='text-gray-700 text-center'>No tienes recetas favoritas aún.</p>
            )}
        </div>
    );
};

export default Favorites;
