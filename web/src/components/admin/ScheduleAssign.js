// src/components/admin/ScheduleAssign.js
import React, { useState } from 'react';

const ScheduleAssign = () => {
    // Ejemplo de datos simulados. Deberías obtener esta información de tu API.
    const movies = [
        { id: 1, title: 'Pelicula 1', description: 'Descripción de la Película 1' },
        { id: 2, title: 'Pelicula 2', description: 'Descripción de la Película 2' },
        // Agrega más películas según las necesidades
    ];

    const rooms = ['Sala 1', 'Sala 2', 'Sala 3']; // Ejemplo de salas disponibles

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        selectedMovie: '',
        selectedRoom: '',
        selectedTime: '',
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
            selectedMovie: '',
            selectedRoom: '',
            selectedTime: '',
        });
    };

    return (
        <div className="container mt-4">
            <h2>Asignar Sala y Horario a Película</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="selectedMovie">Seleccionar Película:</label>
                    <select
                        className="form-control"
                        id="selectedMovie"
                        name="selectedMovie"
                        value={formData.selectedMovie}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Seleccione una película
                        </option>
                        {movies.map((movie) => (
                            <option key={movie.id} value={movie.id}>
                                {movie.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedRoom">Seleccionar Sala:</label>
                    <select
                        className="form-control"
                        id="selectedRoom"
                        name="selectedRoom"
                        value={formData.selectedRoom}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Seleccione una sala
                        </option>
                        {rooms.map((room, index) => (
                            <option key={index} value={room}>
                                {room}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedTime">Seleccionar Horario:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="selectedTime"
                        name="selectedTime"
                        value={formData.selectedTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Asignar Sala y Horario
                </button>
            </form>
        </div>
    );
};

export default ScheduleAssign;
