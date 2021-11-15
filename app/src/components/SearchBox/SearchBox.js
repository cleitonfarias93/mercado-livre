import React, { useState } from 'react';
import i18n from 'i18next';
import { useHistory } from 'react-router-dom';

// Utils
import { convertToQueryString } from 'utils/queryString';

// Components
import MercadoLivreLogo from 'components/MercadoLivreLogo';

// Icons
import { BsSearch } from 'react-icons/bs';

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

  const redirectPage = () => {
    setSearchInput('');
    history.push('/');
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
        <div className="header__icon" onClick={redirectPage} aria-hidden="true">
          <MercadoLivreLogo />
        </div>
        <input
          type="text"
          className="header__input-search form-control"
          placeholder={i18n.t('Nunca pare de procurar')}
          aria-label={i18n.t('Nunca pare de procurar')}
          aria-describedby="basic-addon2"
          value={searchInput}
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
            <BsSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SearchBox;
