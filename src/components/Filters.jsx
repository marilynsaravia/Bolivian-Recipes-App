import React, { useState } from 'react';

const Filters = ({ filter, setFilter }) => {
    
    const [activeFilter, setActiveFilter] = useState('Todas');

    const buttonClasses = 'font-semibold border-2 text-green-500 border-green-500 hover:bg-green-500 focus:outline-none hover:text-white py-2 px-4 rounded-md transition duration-150 ease-in-out';

    const handleClick = (value) => {
        setActiveFilter(value);
        setFilter(value); 
    };

    return (
        <div className="w-full flex flex-wrap justify-center items-center px-12 mt-12 gap-4">
            <div className='flex gap-3 p-3 rounded-md bg-white shadow-sm'>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Todas' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Todas')}
                >
                    Todas
                </button>
            </div>
            <div className='flex gap-3 p-3 rounded-md bg-white shadow-sm'>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Fácil' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Fácil')}
                >
                    Fácil
                </button>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Media' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Media')}
                >
                    Media
                </button>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Difícil' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Difícil')}
                >
                    Difícil
                </button>
            </div>
            <div className='flex gap-3 p-3 rounded-md bg-white shadow-sm'>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Occidental' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Occidental')}
                >
                    Occidental
                </button>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Oriental' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Oriental')}
                >
                    Oriental
                </button>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Valluna' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Valluna')}
                >
                    Valluna
                </button>
            </div>
            <div className='flex gap-3 p-3 rounded-md bg-white shadow-sm'>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Desayuno' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Desayuno')}
                >
                    Desayuno
                </button>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Comida' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Comida')}
                >
                    Comida
                </button>
                <button
                    className={`${buttonClasses} ${activeFilter === 'Picoteo' ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleClick('Picoteo')}
                >
                    Picoteo
                </button>
            </div>
        </div>
    );
}

export default Filters;
