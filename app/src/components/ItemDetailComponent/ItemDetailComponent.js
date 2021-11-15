import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Components
import PriceDisplay from 'components/PriceDisplay';

// Styles
import './ItemDetailComponent.scss';

const ItemDetailComponent = ({ item = {} }) => {
  const history = useHistory();

  const goToItemDetails = () => {
    history.push(`/items/${item.id}`);
  };

  const renderPrice = () => {
    const amount = new Intl.NumberFormat('pt-BR').format(item.price?.amount);
    const decimals = item.price?.decimals;

    return (
      <PriceDisplay
        className="item-detail-component__content__price"
        amount={amount}
        decimals={decimals}
        symbol="$"
      />
    );
  };

  return (
    <section
      className="item-detail-component"
      onClick={goToItemDetails}
      aria-hidden="true"
    >
      <div className="item-detail-component__image">
        <img src={item.picture} alt={item.title} />
      </div>

      <div className="item-detail-component__content">
        {renderPrice()}
        <span className="item-detail-component__content__name">
          {item.title}
        </span>
      </div>

      <span className="item-detail-component__address">
        {item.address?.city_name}
      </span>
    </section>
  );
};

ItemDetailComponent.propTypes = {
  item: PropTypes.shape({
    picture: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
    }),
    title: PropTypes.string,
    condition: PropTypes.string,
  }),
};

ItemDetailComponent.defaultProps = {
  item: {},
};

export default ItemDetailComponent;
