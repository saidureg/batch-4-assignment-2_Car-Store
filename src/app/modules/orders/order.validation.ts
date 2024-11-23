import mongoose from 'mongoose';
import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  car: z
    .string()
    .nonempty('Car ID is required')
    .refine((id) => mongoose.Types.ObjectId.isValid(id), {
      message: 'Invalid car ID',
    })
    .transform((id) => new mongoose.Types.ObjectId(id)),
  quantity: z.number().int().positive('Quantity must be a positive number'),
  totalPrice: z.number().positive('Total price must be a positive number'),
});

export default orderValidationSchema;
