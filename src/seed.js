import 'dotenv/config';
import mongoose from 'mongoose';

import userModel from './dao/models/User.js';
import petModel from './dao/models/Pet.js';
import adoptionModel from './dao/models/Adoption.js';
import { createHash } from './utils/index.js';
import { connectMongoDB } from './config/mongo.js';

try {
  await connectMongoDB();

  const userEmail = 'seed.adoptme@example.com';
  const user = await userModel.findOneAndUpdate(
    { email: userEmail },
    {
      first_name: 'Seed',
      last_name: 'Adoptme',
      email: userEmail,
      password: await createHash('SeedPassword123'),
      role: 'user'
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  const pet = await petModel.findOneAndUpdate(
    { name: 'Firulais Seed', specie: 'dog' },
    {
      name: 'Firulais Seed',
      specie: 'dog',
      birthDate: new Date('2021-01-01'),
      adopted: true,
      owner: user._id,
      image: ''
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  await userModel.findByIdAndUpdate(user._id, { $addToSet: { pets: { _id: pet._id } } });

  await adoptionModel.findOneAndUpdate(
    { owner: user._id, pet: pet._id },
    { owner: user._id, pet: pet._id },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  console.log('Seed completado: base, colecciones y documentos iniciales disponibles.');
} catch (error) {
  console.error('ERROR al ejecutar seed:', error.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
