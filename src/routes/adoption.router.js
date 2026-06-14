import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import validateObjectId from '../middlewares/validateObjectId.js';

const router = Router();

router.get('/', asyncHandler(adoptionsController.getAllAdoptions));
router.get('/:aid', validateObjectId('aid'), asyncHandler(adoptionsController.getAdoption));
router.post('/:uid/:pid', validateObjectId('uid'), validateObjectId('pid'), asyncHandler(adoptionsController.createAdoption));

export default router;
