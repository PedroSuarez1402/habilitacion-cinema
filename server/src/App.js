import express from 'express';
import { connectDB } from './db';
import movieRoutes from './routes/movieRoutes';
import horarioRoutes from './routes/horarioRoutes';

const app = express();

connectDB(); // Conectar a la base de datos al iniciar la aplicación

app.use(express.json());

// Rutas para películas y horarios
app.use('/api', movieRoutes);
app.use('/api', horarioRoutes);
// Otras rutas y configuraciones

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
