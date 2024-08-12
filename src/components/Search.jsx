import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

const Search = ({ search, setSearch }) => {
    
    const searcher = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="w-full flex flex-col place-items-center">
            <h2 className="my-12 text-2xl md:text-3xl text-center font-semibold text-gray-700">
                Descubre las recetas bolivianas más populares.
            </h2>
            <div className="relative w-[380px]">
                <input
                    className='w-full p-3 pl-12 border border-slate-100 shadow-sm rounded-xl focus:outline-none placeholder:text-slate-300'
                    type='text'
                    value={search}
                    onChange={searcher}
                    placeholder='Buscar recetas...'
                />
                <MagnifyingGlassIcon className="w-6 h-6 text-slate-300 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
        </div>
    );
}

export default Search;
