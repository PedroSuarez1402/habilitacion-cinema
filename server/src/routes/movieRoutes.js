import express from 'express';
import { getAllMovies, createMovie } from '../controllers/movieController';

const router = express.Router();

router.get('/movies', getAllMovies);
router.post('/movies', createMovie);

export default router;
