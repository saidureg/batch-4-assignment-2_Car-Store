import express from 'express';
import { carController } from './car.controller';

const router = express.Router();

router.post('/', carController.createCar);
router.get('/', carController.getAllCars);

export const carRoutes = router;
