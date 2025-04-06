const express = require('express');
const cors = require('cors');
const tareaRouter = require('./routers/tareaRouter');

const PORT = process.env.PORT || 3000;
const app = express();

// Permitir CORS solo para tu dominio específico
const corsOptions = {
    origin: 'https://aws-nube.d9ftlm8bplh8v.amplifyapp.com/',
    optionsSuccessStatus: 200 // Para asegurar la compatibilidad con algunos navegadores
  };

//Middleware
app.use(cors(corsOptions));

// Middleware para validar el origen de la solicitud
app.use((req, res, next) => {
  const allowedOrigins = ['https://aws-nube.d9ftlm8bplh8v.amplifyapp.com/'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    next(); // Permitir la solicitud si el origen es permitido
  } else {
    res.status(403).send('Access denied'); // Denegar el acceso si el origen no es válido
  }
});

app.use('/api/tareas', tareaRouter);

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})