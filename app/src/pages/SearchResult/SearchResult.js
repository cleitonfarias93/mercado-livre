import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import i18n from 'i18next';

// Components
import Breadcrumb from 'components/Breadcrumb';
import ItemDetailComponent from 'components/ItemDetailComponent';
import Spinner from 'components/Spinner';

// Utils
import { getQueryParametersByURL } from 'utils/queryString';

// Services
import { getItems } from 'services/ItemService';

// Styles
import './SearchResult.scss';

const SearchResult = () => {
  const history = useHistory();

  const [items, setItems] = useState([]);
  const [fetchingItems, setFetchingItems] = useState(true);

  useEffect(() => {
    const parameters = getQueryParametersByURL(history.location.search);
    fetchItems(parameters);
  }, [history.location.search]);

  const fetchItems = async (parameters) => {
    setFetchingItems(true);

    try {
      const { search } = parameters || {};
      const { data } = await getItems(search);
      setItems(data);
    } catch (error) {
      alert(i18n.t('Erro ao tentar buscar items, tente novamente!'));
    } finally {
      setFetchingItems(false);
    }
  };

  if (fetchingItems) {
    return <Spinner />;
  }

  if (!fetchingItems && !items?.items?.length) {
    history.push('/not-found');
  }

  return (
    <>
      <Breadcrumb items={items.categories} />
      <div className="search-result">
        {items?.items?.map((item) => (
          <ItemDetailComponent key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default SearchResult;
