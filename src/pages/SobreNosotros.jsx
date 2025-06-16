import React from 'react';

export default function SobreNosotros() {
  return (
    <div className="page-container" style={{ maxWidth: 800, lineHeight: 1.6 }}>
      {/* ───────────────────── 1. Qué hace la página ───────────────────── */}
      <section>
        <h2>¿Qué Hace Fisiter?</h2>
        <p>
          <em>Fisiter</em> es una plataforma web que motiva a registrar actividad física
          en un contexto empresarial. El usuario elige un ejercicio, anota su
          duración y obtiene puntos. Con esos puntos puede canjear recompensas
          tangibles —por ejemplo, gift cards o días libres—, competir en un
          ranking amistoso y ver estadísticas personales. De esta forma una
          empresa u organización puede incentivar hábitos saludables sin
          equipamiento costoso ni procesos complicados.
        </p>
        <p>
          Ejemplos prácticos de uso:
        </p>
        <ul>
          <li>
            <strong>Prueba piloto&nbsp;</strong>— Un equipo de ventas registra
            pausas de estiramiento de 5&nbsp;min cada hora; al mes la empresa
            entrega botellas reutilizables a quienes superaron 30000 puntos.
          </li>
          <li>
            <strong>Reto semanal&nbsp;</strong>— Un departamento de TI compite
            por la mayor cantidad de minutos de caminata; el ganador recibe una
            gift&nbsp;card de bienestar.
          </li>
          <li>
            <strong>Informe de bienestar&nbsp;</strong>— Recursos Humanos usa
            los datos agregados para medir la participación y plantear nuevas
            iniciativas de salud ocupacional.
          </li>
        </ul>
      </section>

      {/* ─────────────── 2. Dos estudiantes — versión simplificada ─────── */}
      <section>
        <h2>Nuestro Equipo</h2>
        <p>
          <strong>Cristóbal Pichara</strong> y <strong>Estefanía Sandoval</strong>, somos estudiantes de la
          Universidad Católica. se ideó una solución ligera que responde a
          necesidades reales de bienestar en las empresas. Nuestra meta es que
          cualquier organización pueda adoptar Fisiter en minutos y ver
          resultados medibles en motivación y salud y adaptar sus funciones de forma comoda para sus necesidades.
        </p>
      </section>
    </div>
  );
}
