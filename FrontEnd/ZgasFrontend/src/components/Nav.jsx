import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">Crud de blog</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Crud de branch</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Crud de evaluation</Link>
                </li>

            </ul>
            </div>
        </div>
        </nav>
    );
}
export default Nav;