import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../utils/storage';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail]   = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      registrarUsuario({ nombre, email, password });
      alert('Registro exitoso');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="page-container">
      <h2 className="text-center">Registro</h2>
      <form onSubmit={handleRegister} className="form-container">
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}
