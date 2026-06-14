import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import validateObjectId from '../middlewares/validateObjectId.js';
import usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/', asyncHandler(usersController.getAllUsers));

router.get('/:uid', validateObjectId('uid'), asyncHandler(usersController.getUser));
router.put('/:uid', validateObjectId('uid'), asyncHandler(usersController.updateUser));
router.delete('/:uid', validateObjectId('uid'), asyncHandler(usersController.deleteUser));


export default router;
