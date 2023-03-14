import axios from '../config/axios';

export const fetchQueue = () => axios.get('/queue')
