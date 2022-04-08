import express from 'express';

const router = express.Router();

import { authUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'

import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser) // default route is /api/users

router.route('/login').post(authUser)

router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router