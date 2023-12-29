// src/components/shared/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Cine Junior
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                            Panel de Admin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">
                            Panel de Usuario
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
