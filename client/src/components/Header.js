import React from 'react'
import { Link } from 'react-router-dom'
/* This contains all elements in the header */
const Header = () => {
    return (
        <header className='header'>
            <nav className='nav-bar'>
                <Link to='/' className='uppercase cursor-pointer stroke-current'> Blu </Link>
                <Link to='/books' className='cursor-pointer'> Books </Link>
                <Link to='/news' className='cursor-pointer'> News </Link>
            </nav>
        </header>
    )
}

export default Header