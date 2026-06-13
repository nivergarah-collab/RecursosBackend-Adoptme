import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const mongoURI = process.env.MONGO_URL;

if (!mongoURI) {
  console.error("❌ ERROR: La variable de entorno MONGO_URL está vacía o no definida.");
  process.exit(1); 
}

try {
  await mongoose.connect(mongoURI);
  console.log("🌱 Conexión a MongoDB establecida con éxito.");
} catch (error) {
  console.error("❌ Error al conectar a MongoDB:", error.message);
  process.exit(1);
}

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
