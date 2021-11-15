import axios from './Api';

export const getItems = (item) => axios.get('/items', { params: { q: item } });

export const getItemsById = (id) => axios.get(`/items/${id}`);
