import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Registro() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', { email, password: contraseña });
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  };

  return (
    <div className="page-container">
      <h2 className="text-center">Registro</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button className="button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
