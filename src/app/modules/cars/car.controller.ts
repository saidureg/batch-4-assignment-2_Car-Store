import { Request, Response } from 'express';
import { carService } from './car.service';
import carValidationSchema from './car.validation';
import { FilterQuery } from 'mongoose';
import { ICar } from './car.interface';

const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const carData = req.body;
    const validateData = carValidationSchema.parse(carData);
    const car = await carService.createCar(validateData);
    res.status(201).json({
      message: 'Car created successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error,
    });
  }
};

const getAllCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const { searchTerm } = req.query;

    const query: FilterQuery<ICar> = {};

    if (searchTerm) {
      query.$or = [
        { brand: { $regex: searchTerm, $options: 'i' } },
        { model: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ];
    }
    const cars = await carService.getAllCars(query);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieved cars',
      success: false,
      error,
    });
  }
};

const getCarById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { carId } = req.params;
    const car = await carService.getCarById(carId);
    if (!car) {
      res.status(404).json({
        message: 'Car not found',
        success: false,
      });
      return;
    }
    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve car',
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const carController = {
  createCar,
  getAllCars,
  getCarById,
};
