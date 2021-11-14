import React, { useState } from 'react';
import i18n from 'i18next';
import { useHistory } from 'react-router-dom';

// Utils
import { convertToQueryString } from 'utils/queryString';

// Icons
import MercadoLivreIcon from 'components/Icons/MercadoLivreIcon';

// Styles
import './SearchBox.scss';

const SearchBox = () => {
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = () => {
    if (!searchInput.trim().length) {
      return;
    }

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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <header className="header">
      <div className="input-group">
        <MercadoLivreIcon className="header__icon" />
        <input
          type="text"
          className="header__input-search form-control"
          placeholder={i18n.t('Nunca pare de procurar')}
          aria-label={i18n.t('Nunca pare de procurar')}
          aria-describedby="basic-addon2"
          onChange={handleChange}
          onKeyPress={handleKeyDown}
        />
        <div className="input-group-append">
          <button
            type="button"
            className="header__input-search__button input-group-text"
            onClick={handleSubmit}
            id="basic-addon2"
          >
            {i18n.t('Buscar')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchBox;
