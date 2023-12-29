import { Router } from 'express';
import { getMovies, createMovie, updateMovie, deleteMovie, getMovie } from '../controllers/movieController.js';

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router