import { FilterQuery } from 'mongoose';
import { ICar } from './car.interface';
import CarModel from './car.model';

const createCar = async (carData: ICar): Promise<ICar> => {
  return await CarModel.create(carData);
};

const getAllCars = async (query: FilterQuery<ICar> = {}): Promise<ICar[]> => {
  return await CarModel.find(query);
};

const getCarById = async (id: string): Promise<ICar | null> => {
  return await CarModel.findById(id);
};

const updateCar = async (
  id: string,
  updateCarData: Partial<ICar>,
): Promise<ICar | null> => {
  return await CarModel.findByIdAndUpdate(id, updateCarData, { new: true });
};

const deleteCar = async (id: string): Promise<ICar | null> => {
  return await CarModel.findByIdAndDelete(id);
};

export const carService = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
