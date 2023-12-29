// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/shared/NavBar.js';
import AdminDashboard from './components/admin/AdminDashboard.js';
import UserDashboard from './components/user/UserDashboard.js';
import Home from './pages/Home.js';
import UserMovies from './components/user/UserMovies.js';
import MovieList from './components/movies/MovieList.js';
import Login from './pages/login.js'; // Nuevo componente de inicio de sesión
/* import PrivateRoute from './components/PrivateRoute'; // Nuevo componente de ruta privada */
/* import { isAuthenticated, isAdmin } from './services/auth'; */

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/user" element={<UserDashboard/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;