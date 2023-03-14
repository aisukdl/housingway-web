import axios from '../config/axios';

export const fetchServer = () => axios.get('/util/server')
