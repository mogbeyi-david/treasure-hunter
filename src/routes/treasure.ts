import express from 'express';
import * as TreasureController from '../controllers/treasure';
const router = express.Router();

// Signup
router.get('/find', TreasureController.find);
export default router;
