import { z } from 'zod';

const carValidationSchema = z.object({
  brand: z.string().nonempty('Brand is required'),
  model: z.string().nonempty('Model is required'),
  year: z
    .number()
    .min(1000, { message: 'Year must be 1000 or later' })
    .nonnegative({ message: 'Year must be a positive number' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    required_error: 'Category is required',
  }),
  description: z.string().nonempty('Description is required'),
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a positive number' }),
  inStock: z.boolean({
    required_error: 'In-stock status is required',
  }),
});

export default carValidationSchema;
