import React from 'react'
import { Link } from 'react-router-dom'
/* This contains all elements in the header */
const Header = () => {
    return (
        <header className='inline-flex p-4 justify-between justify-items-center min-w-full 
                            items-center font-serif text-lg font-bold bg-neutral-50 text-blue-600'>
            <Link to='/' className='uppercase'> Blu </Link>
            <Link to='/books'> Books </Link>
            <Link to='/about'> About </Link>
        </header>
    )
}

export default Header