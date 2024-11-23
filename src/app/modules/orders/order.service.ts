import CarModel from '../cars/car.model';
import { IOrder } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  const car = await CarModel.findById(orderData.car);
  if (!car) {
    throw { status: 404, message: 'Car not found' };
  }

  if (car.quantity < orderData.quantity) {
    throw { status: 400, message: 'Insufficient stock available' };
  }

  car.quantity -= orderData.quantity;
  if (car.quantity === 0) {
    car.inStock = false;
  }
  await car.save();

  return await OrderModel.create(orderData);
};

const calculateRevenue = async (): Promise<number> => {
  const revenue = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return revenue[0]?.totalRevenue || 0;
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
