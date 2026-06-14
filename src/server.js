import 'dotenv/config';

import app from './app.js';
import { connectMongoDB } from './config/mongo.js';

const PORT = process.env.PORT || 8080;

try {
  await connectMongoDB();
  console.log('Conexion a MongoDB establecida con exito.');
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} catch (error) {
  console.error('Error al conectar a MongoDB:', error.message);
  process.exit(1);
}
