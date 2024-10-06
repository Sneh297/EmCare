import express from 'express';
import { Signin } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/sign-in', Signin);
export default router;
