import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Movie'
    }
    
})
const Room = mongoose.model('Room', roomSchema);

export default Room;