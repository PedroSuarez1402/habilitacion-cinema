import Room from "../models/room.js";

const getRooms = async (req, res) => {
    try {
        const rooms = Room.find();

        return res.json(rooms);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

const getRoom = async (req, res) => {
    const { id } = req.params;

    try {
        const room = await Room.findById(id).exec();
        if (room) {
            return res.json(room);
        }
        return res.status(404).json({ message: 'Sala no encontrada' });

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};

const createRoom = async (req, res) => {
    const roomData = req.body;

    const room = new Room({
        name: roomData.name,
        tipo: roomData.tipo,
        capacity: roomData.capacity
    });
    try {
        await room.save();
        return res.status(201).json(room);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};

const updateRoom = async (req, res) => {
    const {id} = req.params;
    const roomData = req.body;

    try {
        const room = await Room.findById(id).exec();

        if (room) {
            room.name = roomData.name;

            await room.save();
            return res.json(room);
        }
        return res.status(404).json({message: 'Sala no encontrada'})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
};

const deleteRoom = async (req, res) => {
    const {id} = req.params;

    try {
        const room = await Room.findById(id).exec();
        if (room) {
            await room.deleteOne();

            return res.json({message: 'Sala eliminada'});
        }
        return res.status(400).json({message: 'Sala no encontrada'});

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export {
    createRoom,
    getRoom,
    getRooms,
    updateRoom,
    deleteRoom
};