import axios from './Api';

export const getItems = (item) => axios.get('/items', { params: { q: item } });
