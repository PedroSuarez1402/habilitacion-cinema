import express from 'express';
import cors from 'cors';
import { connectDb } from './db.js';

import movieRoutes from './routes/movieRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';

const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json());
app.use(cors());

app.use('/movies', movieRoutes);
app.use('/rooms', roomRoutes);
app.use('/calendario', scheduleRoutes);

connectDb();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
