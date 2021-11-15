const { default: axios } = require('axios');
const config = require('config');

const baseURL = config.get('app.urlMercadoLivre');

const instanceAxios = axios.create({
  baseURL,
});

module.exports = instanceAxios;
