import express from 'express';
import {login,signup, checkAuth, updateProfile} from '../controllers/userController.js';
import { protectRoute } from '../middleware/auth.js';

const userRoutes = express.Router();

userRoutes.post('/signup', signup);
userRoutes.post('/login', login);
userRoutes.put('/update-profile', protectRoute,updateProfile);
userRoutes.get('/check-auth', protectRoute, checkAuth);

export default userRoutes;