import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="page-container text-center">
      <h2>Sobre Nosotros</h2>
      <p>Fisiter es una iniciativa tecnológica para fomentar la actividad física dentro del entorno laboral.</p>
      <p>Este proyecto fue desarrollado por:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Cristóbal Pichara</strong> – Desarrollador Fullstack</li>
        <li><strong>Estefanía Sandoval</strong> – Diseñadora de experiencia y contenido</li>
      </ul>
      <p>Creemos en el poder del bienestar organizacional para transformar no solo la productividad, sino también la calidad de vida de los trabajadores.</p>
    </div>
  );
};

export default SobreNosotros;
