// src/components/admin/AdminMovieForm.js
import React, { useState } from 'react';

const AdminMovieForm = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        room: '',
        time: '',
    });

    // Función para manejar los cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí deberías implementar la lógica para enviar los datos del formulario a tu API
        console.log('Enviando datos del formulario:', formData);
        // También puedes realizar la lógica para limpiar el formulario o manejar el resultado de la operación
        setFormData({
            title: '',
            description: '',
            room: '',
            time: '',
        });
    };

    return (
        <div className="container mt-4">
            <h2>Registrar Nueva Película</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="room">Sala:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="room"
                        name="room"
                        value={formData.room}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Horario:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrar Película
                </button>
            </form>
        </div>
    );
};

export default AdminMovieForm;
