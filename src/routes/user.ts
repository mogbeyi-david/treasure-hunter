import express from 'express';
import * as UserController from '../controllers/user';
import * as UserValidations from '../validations/user';
const router = express.Router();

// Signup
router.post(
  '/signup',
  UserValidations.validateCreateUser,
  UserController.signUp,
);
export default router;
