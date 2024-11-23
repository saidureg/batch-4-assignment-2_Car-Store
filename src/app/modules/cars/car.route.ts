import express from 'express';
import { carController } from './car.controller';

const router = express.Router();

router.post('/', carController.createCar);
router.get('/', carController.getAllCars);
router.get('/:carId', carController.getCarById);

export const carRoutes = router;
