import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import petsController from '../controllers/pets.controller.js';
import validateObjectId from '../middlewares/validateObjectId.js';
import uploader from '../utils/uploader.js';

const router = Router();

router.get('/', asyncHandler(petsController.getAllPets));
router.post('/', asyncHandler(petsController.createPet));
router.post('/withimage', uploader.single('image'), asyncHandler(petsController.createPetWithImage));
router.put('/:pid', validateObjectId('pid'), asyncHandler(petsController.updatePet));
router.delete('/:pid', validateObjectId('pid'), asyncHandler(petsController.deletePet));

export default router;
