import React from 'react';


const Home = () => {
    return (
        <div className="container mt-5 text-center">
            <h1 className="display-4">¡Bienvenido a Mi Proyecto!</h1>
            <p className="lead">Explora las funcionalidades de esta aplicación usando las opciones de navegación.</p>
            <hr className="my-4" />
            <div className="mt-4">
                <h2>Características Principales</h2>
                <ul className="list-group">
                    <li className="list-group-item">Página de información</li>
                    <li className="list-group-item">Crud de products </li>
                    <li className="list-group-item">Crud de branch</li>
                    <li className="list-group-item">Crud de blog</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;