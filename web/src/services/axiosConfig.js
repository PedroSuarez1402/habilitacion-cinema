import axios from 'axios';

const instance = axios.create({
    baseURL: 'mongodb+srv://root:root@cluster0.uoqvgaz.mongodb.net/cinema?retryWrites=true&w=majority',
})
export default instance;