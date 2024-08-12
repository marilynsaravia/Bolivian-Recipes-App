import React from 'react'
import { getImageFooter } from '../utils'

const Footer = () => {
    return (
        <footer className='w-full flex justify-center items-center py-3'>
            <small className='text-center text-sm text-slate-400'>Desarrollado por <a className='text-green-500 hover:text-green-400' href='https://www.linkedin.com/in/marilynsaravia/' target='_blank'>Marilyn Saravia</a></small>
            <img className='w-7 ml-2' src={getImageFooter('bolivia.png')} alt='Bandera boliviana'/>
        </footer>
    )
}

export default Footer