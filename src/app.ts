import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRoutes } from './app/modules/cars/car.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/cars', carRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send();
});

export default app;
