import React, { useState } from 'react';
import i18n from 'i18next';
import { useHistory } from 'react-router-dom';

// Utils
import { convertToQueryString } from 'utils/queryString';

// Styles
import './SearchBox.scss';

const SearchBox = () => {
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {
    const query = convertToQueryString({
      search: searchInput,
    });

    history.push({
      pathname: '/items',
      search: query,
    });
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <header className="header">
      <input
        className="header__input-search"
        placeholder={i18n.t('Nunca pare de procurar')}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
        {i18n.t('Buscar')}
      </button>
    </header>
  );
};

export default SearchBox;
