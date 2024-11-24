import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRoutes } from './app/modules/cars/car.route';
import { orderRoutes } from './app/modules/orders/order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/cars', carRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Car API');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
    success: false,
  });
});

export default app;
