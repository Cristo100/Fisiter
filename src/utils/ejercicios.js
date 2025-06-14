/**  Catálogo centralizado  -----------------------------------------------
 *  • Cada ejercicio tiene id estable (útil para BD), nombre visible y factor.
 *  • Si quieres ajustar valores, solo cambia aquí.
 */
export const EJERCICIOS = [
  { id: 'caminata',           nombre: 'Caminata',              factor: 1 },
  { id: 'carrera',            nombre: 'Carrera',               factor: 4 },
  { id: 'ciclismo',           nombre: 'Ciclismo',              factor: 3 },
  { id: 'natacion',           nombre: 'Natación',              factor: 4 },
  { id: 'yoga',               nombre: 'Yoga',                  factor: 1 },
  { id: 'pilates',            nombre: 'Pilates',               factor: 1 },
  { id: 'bicicleta-fija',     nombre: 'Bicicleta fija',        factor: 3 },
  { id: 'remo',               nombre: 'Remo',                  factor: 3 },
  { id: 'escalada',           nombre: 'Escalada',              factor: 4 },
  { id: 'senderismo',         nombre: 'Senderismo',            factor: 2 },
  { id: 'baile',              nombre: 'Baile',                 factor: 2 },
  { id: 'boxeo',              nombre: 'Boxeo',                 factor: 4 },
  { id: 'artes-marciales',    nombre: 'Artes marciales',       factor: 4 },
  { id: 'futbol',             nombre: 'Fútbol',                factor: 3 },
  { id: 'basquetbol',         nombre: 'Básquetbol',            factor: 3 },
  { id: 'voleibol',           nombre: 'Voleibol',              factor: 2 },
  { id: 'tenis',              nombre: 'Tenis',                 factor: 3 },
  { id: 'padel',              nombre: 'Pádel',                 factor: 3 },
  { id: 'golf',               nombre: 'Golf',                  factor: 1 },
  { id: 'esqui',              nombre: 'Esquí',                 factor: 4 },
  { id: 'snowboard',          nombre: 'Snowboard',             factor: 4 },
  { id: 'patinaje',           nombre: 'Patinaje',              factor: 3 },
  { id: 'surf',               nombre: 'Surf',                  factor: 3 },
  { id: 'kayak',              nombre: 'Kayak',                 factor: 2 },
  { id: 'sup',                nombre: 'Stand-up paddle',       factor: 2 },
  { id: 'saltos-cuerda',      nombre: 'Saltos de cuerda',      factor: 3 },
  { id: 'hiit',               nombre: 'HIIT',                  factor: 4 },
  { id: 'fuerza',             nombre: 'Entren. de fuerza',     factor: 3 },
  { id: 'circuito',           nombre: 'Circuito funcional',    factor: 3 },
  { id: 'estiramientos',      nombre: 'Estiramientos',         factor: 1 },
];

/**  Lógica estándar de puntaje
 *   Puntos = minutos x factor  (redondeado)
 *   • Devuelve 0 si id no existe o minutos ≤ 0
 */
export function calcularPuntos(idEjercicio, minutos) {
  const ejercicio = EJERCICIOS.find((e) => e.id === idEjercicio);
  if (!ejercicio || !minutos || minutos <= 0) return 0;
  return Math.round(minutos * ejercicio.factor);
}
