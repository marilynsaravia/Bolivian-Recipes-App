import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';
import { getImageNavbar } from '../utils';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='w-full h-[130px] flex justify-between items-center px-12'>
            <Link to={'/'}>
                <img className='w-[140px]' src={getImageNavbar('logo.png')} alt='Logotipo Bolivian Recipes App'/>
            </Link>
            <Link to={'/Favorites'}>
                <button className='p-2 bg-white shadow-sm rounded-md  text-rose-600 hover:text-rose-700 transition-colors duration-300'>
                    <HeartIcon className='w-8 h-8' />
                </button>
            </Link>
            
        </div>
    )
}
export default Navbar;
