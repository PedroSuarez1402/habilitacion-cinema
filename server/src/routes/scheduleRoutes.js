import { Router } from "express";
import { getSchedules, createSchedule, updateSchedule, deleteSchedule} from "../controllers/scheduleController.js";

const router = Router();

router.get('/', getSchedules);
router.post('/', createSchedule);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router