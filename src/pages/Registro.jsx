import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/register', { email, password });
    navigate('/login');
  };

  return (
    <div className="page-container">
      <h2 className="text-center">Registro</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="email"    placeholder="Correo"     value={email}    onChange={(e) => setEmail(e.target.value)}    required/>
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button className="button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}
