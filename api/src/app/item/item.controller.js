const httpStatus = require('http-status');
const log = require('../../logger');

const ItemService = require('./item.service');

module.exports = (router) => {
  router.get('/api/items', getItems);
  router.get('/api/items/:id', getItemsById);
};

const getItems = async (req, res) => {
  log.info(`${req.method} -> ${req.url}`);

  const { q: query } = req.query;

  try {
    if (!query) {
      return res.status(httpStatus.BAD_REQUEST).send('It is necessary to inform the item');
    }

    const items = await ItemService.getItemsByQuery(query);

    res.status(httpStatus.OK).send(items);
  } catch (error) {
    log.error(error);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      error: 'Error trying to get items',
    });
  }
};

const getItemsById = async (req, res) => {
  log.info(`${req.method} -> ${req.url}`);

  try {
    const item = await ItemService.getItemById(req.params.id);

    res.status(httpStatus.OK).send(item);
  } catch (error) {
    log.error(error);

    if (error.response.status === 404) {
      return res.status(httpStatus.NOT_FOUND).send({
        error: 'Item not found',
      });
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      error: 'Error trying to get item',
    });
  }
};
