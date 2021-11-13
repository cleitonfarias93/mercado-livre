import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Breadcrumb from 'components/Breadcrumb';
import ItemDetailComponent from 'components/ItemDetailComponent';

// Utils
import { getQueryParametersByURL } from 'utils/queryString';

// Services
import { getItems } from 'services/ItemService';

// Styles
import './SearchResult.scss';

const SearchResult = () => {
  const history = useHistory();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const parameters = getQueryParametersByURL(history.location.search);
    fetchItems(parameters);
  });

  const fetchItems = async (parameters) => {
    const { search } = parameters;
    const { data } = await getItems(search);

    setItems(data);
  };

  return (
    <div className="search-result">
      <Breadcrumb items={items?.categories} />
      <ItemDetailComponent />
    </div>
  );
};

export default SearchResult;
