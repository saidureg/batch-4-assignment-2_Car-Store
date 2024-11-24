import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const validateOrderData = orderValidationSchema.parse(orderData);

    const order = await orderService.createOrder(validateOrderData);

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Order creation failed',
      success: false,
      error,
      stack:
        (error as Error).stack?.match(/"message": "(.*?)"/g) +
        ' ' +
        (error as Error).stack?.split('[as error]')[1],
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      success: false,
      error,
      stack:
        (error as Error).stack?.match(/"message": "(.*?)"/g) +
        ' ' +
        (error as Error).stack?.split('[as error]')[1],
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
