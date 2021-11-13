import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import './SearchBox.scss';

const SearchBox = () => {
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {
    history.push({
      pathname: '/items',
      search: `?search=${searchInput}`,
    });
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <header className="header">
      <input
        className="header__input-search"
        placeholder="Nunca pare de procurar"
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
        Buscar
      </button>
    </header>
  );
};

export default SearchBox;
