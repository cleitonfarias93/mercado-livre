import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ItemDetailComponent.scss';

const ItemDetailComponent = ({ item = {} }) => (
  <section className="item-detail-component">
    <div className="item-detail-component__image">
      <img src={item.picture} alt="Minha Figura" />
    </div>

    <div className="item-detail-component__content">
      <span className="item-detail-component__content__price">
        $ {item.price?.amount}
      </span>
      <span className="item-detail-component__content__name">{item.title}</span>
      <span className="item-detail-component__content__situation">
        {item.condition}
      </span>
    </div>

    <span className="item-detail-component__address">
      {item.address?.city_name}
    </span>
  </section>
);

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
