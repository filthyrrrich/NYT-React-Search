import React from 'react';
import './Nav.css';

export const Nav = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='/'>
            New York Times
        </a>
        <a className='navbar-brand' href='/saved'>
            Saved Articles
        </a>
    </nav>
);
