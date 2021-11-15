const axios = require('../../services/Api');

const getItemsByQuery = async (query) => {
  const response = await axios.get(`/sites/MLA/search?q=${query}`);
  const { data } = response;

  const items = data.results.slice(0, 4);

  return {
    categories: getCategoriesByItemsByItem(data.filters),
    items: buildItemList(items),
  };
};

const getItemById = async (id) => {
  const response = await axios.get(`/items/${id}`);
  const description = await getDescriptionByItemId(id);

  const { data: item } = response;

  const category = await getCategoryByItemId(item.category_id);

  const pathFromRoot = category.path_from_root.map((path) => path.name);

  const data = {
    item: {
      categories: pathFromRoot,
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        ...getPriceByItem(item.price),
      },
      picture: getPictureUrl(item.pictures),
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
  };

  return data;
};

const getDescriptionByItemId = async (id) => {
  const response = await axios.get(`/items/${id}/description`);
  return response.data;
};

const getCategoryByItemId = async (id) => {
  const response = await axios.get(`/categories/${id}`);
  return response.data;
};

const getPictureUrl = (pictures) => {
  if (!pictures?.length) {
    return;
  }

  const picture = [...pictures].shift();
  return picture.url;
};

const getCategoriesByItemsByItem = (filters) => {
  if (!filters?.length) {
    return;
  }

  const { values } = filters.find((element) => element.id === 'category');

  const { path_from_root: categories } = [...values].shift();

  return categories?.map((category) => category.name);
};

const getPriceByItem = (price) => {
  const hasDecimalNumber = price.toString().indexOf('.') >= 0;

  if (hasDecimalNumber) {
    const priceSplitted = price.toString().split('.');
    return {
      amount: priceSplitted[0],
      decimals: priceSplitted[1],
    };
  }

  return {
    amount: price.toString(),
    decimals: '00',
  };
};

const buildItemList = (items) => {
  if (!items?.length) {
    return;
  }

  const itemList = items.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.prices?.presentation?.display_currency,
      ...getPriceByItem(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    address: item.address,
    free_shipping: item.shipping?.free_shipping,
  }));

  return itemList;
};

module.exports = {
  getItemsByQuery,
  getItemById,
};
