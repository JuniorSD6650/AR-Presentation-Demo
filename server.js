const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080; // Puedes cambiar el puerto si lo necesitas

// Sirve los archivos estáticos de la carpeta actual
app.use(express.static(path.join(__dirname, '/')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
  console.log('Abre tu IP en otro dispositivo para acceder desde la red.');
});
