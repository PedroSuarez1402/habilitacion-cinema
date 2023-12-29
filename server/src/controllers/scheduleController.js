import Schedule from "../models/schedule.js";
import Movie from '../models/movie.js';

const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
};
const createSchedule = async (req, res) => {
    try {
        const {time, date, movieId} = req.body;
        const existingMovie = await Movie.findById(movieId);
        if (!existingMovie) {
            return res.status(404).json({message: 'Pelicula no encontrada'})
        }
        const newSchedule = new Schedule({time, date});
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};
const updateSchedule = async (req, res) => {
    const {id} = req.params;
    const scheduleData = req.body;

    try {
        const schedule = Schedule.findById(id);

        if (schedule) {
            schedule.time = schedule.time;
            schedule.date = schedule.date;

            await schedule.save();

            res.json(schedule);
        }
        return res.status(404).json({message: 'calendario no encontrado'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
const deleteSchedule = async (req, res) => {
    const { id } = req.params;
    try {
        const schedule = Schedule.findById(id);
        if (schedule) {
            await schedule.remove();
            res.json({message: 'calendario eliminado'});
        }
        res.status(404).json({message: 'Calendario no encontrado'});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export {getSchedules, createSchedule, updateSchedule, deleteSchedule};