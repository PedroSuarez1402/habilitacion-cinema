import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:root@cluster0.uoqvgaz.mongodb.net/cinema?retryWrites=true&w=majority');
        console.log('MongoDB conectado');
    } catch (error) {
        console.error(error.message);
    }
}