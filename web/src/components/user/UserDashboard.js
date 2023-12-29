// src/pages/user/UserDashboard.js
import React from 'react';

const UserDashboard = () => {
    return (
        <div className="container mt-4">
            <h2>Panel de Usuario</h2>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Películas Disponibles</h5>
                            {/* Mostrar una lista de películas disponibles para el usuario */}
                            <ul>
                                <li>
                                    <strong>Película 1</strong> - Sala 1, Horario 18:00
                                    <button className="btn btn-primary ml-2">Comprar Entrada</button>
                                </li>
                                <li>
                                    <strong>Película 2</strong> - Sala 2, Horario 20:30
                                    <button className="btn btn-primary ml-2">Comprar Entrada</button>
                                </li>
                                {/* Puedes agregar más elementos según tus necesidades */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Mis Funciones</h5>
                            {/* Mostrar funciones adquiridas por el usuario */}
                            <ul>
                                <li>
                                    <strong>Mi Función 1</strong> - Sala 1, Horario 18:00
                                    <button className="btn btn-danger ml-2">Cancelar Entrada</button>
                                </li>
                                <li>
                                    <strong>Mi Función 2</strong> - Sala 2, Horario 20:30
                                    <button className="btn btn-danger ml-2">Cancelar Entrada</button>
                                </li>
                                {/* Puedes agregar más elementos según tus necesidades */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
