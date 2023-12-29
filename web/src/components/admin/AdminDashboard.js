// src/pages/admin/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="container mt-4">
            <h2>Panel de Administrador</h2>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen de Películas</h5>
                            {/* Incluir estadísticas o resúmenes relevantes para películas */}
                            <p className="card-text">Total de películas: 10</p>
                            <p className="card-text">Películas en cartelera: 5</p>
                            {/* Puedes agregar más información según tus necesidades */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Acciones Rápidas</h5>
                            {/* Incluir enlaces o botones para acciones rápidas */}
                            <a href="/admin/movies" className="btn btn-primary">
                                Ver Lista de Películas
                            </a>
                            <a href="/admin/schedule" className="btn btn-secondary">
                                Asignar Salas y Horarios
                            </a>
                            {/* Puedes agregar más acciones según tus necesidades */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
