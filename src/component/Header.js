import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>widgets</Link>
            <div className='right menu'>
                <Link to='/accordion' className='item'>Accordion</Link>
                <Link to='/search' className='item'>Search</Link>
                <Link to='/dropdown' className='item'>Dropdown</Link>
                <Link to='/translate' className='item'>Translate</Link>
            </div>
        </div>
    )
}


export default Header;