import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Movie'
    }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;