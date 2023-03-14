import axios from '../config/axios';

export const createOrder = input => axios.post('/order/create', input);
export const fetchAllOrderByUserId = input => axios.get('/order/myorder', input);
export const fetchOrderByOrderId = orderId => axios.get('/order/myorder/' + orderId)
export const deleteOrder = orderId => axios.delete('/order/delete/' + orderId);
export const updateOrder = (orderId,status) => axios.patch(`/order/${orderId}`, {status})
