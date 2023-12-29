// Importa la librería 'os'
const os = require('os');

// Obtén información del CPU
const cpuInfo = os.cpus();

// Obtén información del sistema operativo
const osInfo = {
  platform: os.platform(),
  type: os.type(),
  release: os.release(),
  arch: os.arch(),
};

// Obtén información de la memoria RAM
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// Muestra la información por consola
console.log('Información del CPU:', cpuInfo);
console.log('Información del Sistema Operativo:', osInfo);
console.log('Memoria RAM Total:', formatBytes(totalMemory));
console.log('Memoria RAM Disponible:', formatBytes(freeMemory));

// Función para formatear bytes a unidades legibles (KB, MB, GB, etc.)
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
