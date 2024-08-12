import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Filters from './components/Filters';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import Favorites from './components/Favorites';
import Data from './data/recipes.json';

function App() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Todas'); 

    const filteredResults = Data.filter(recipe => {
        const matchesSearch = recipe.Title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'Todas' || 
                              recipe.Difficulty === filter || 
                              recipe.Cuisine === filter || 
                              recipe.Type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <Router>
            <div className='w-full h-screen flex flex-col p-3 font-sans'>
                <Navbar />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Search search={search} setSearch={setSearch} />
                                <Filters filter={filter} setFilter={setFilter} />
                                <Recipes recipes={filteredResults} />
                            </>
                        } 
                    />
                    <Route  path="/recipe/:id" element={<Recipe />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
