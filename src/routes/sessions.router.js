import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler.js';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

router.post('/register', asyncHandler(sessionsController.register));
router.post('/login', asyncHandler(sessionsController.login));
router.get('/current', asyncHandler(sessionsController.current));
router.post('/unprotectedLogin', asyncHandler(sessionsController.unprotectedLogin));
router.get('/unprotectedCurrent', asyncHandler(sessionsController.unprotectedCurrent));

export default router;
