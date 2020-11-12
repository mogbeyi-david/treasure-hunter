import express from 'express';
import * as TreasureController from '../controllers/treasure';
import * as TreasureValidation from '../validations/treasure';
const router = express.Router();

// Find
router.get(
  '/find',
  TreasureValidation.validateFindTreasure,
  TreasureController.find,
);
router.post(
  '/',
  TreasureValidation.validateCreateTreasure,
  TreasureController.create,
);

export default router;
