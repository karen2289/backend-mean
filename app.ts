import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//routes va asumir que dentro hay un archivo index
import taskRoutes from './routes';

const app = express();

//middleware
app.use(cors());
app.use(morgan('dev'));
//Si el frontend nos envia un json nuestro backend va a poder leerlo gracias a esta funcion
app.use(express.json());


app.use('/api', taskRoutes);

export default app;