import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import i18n from 'i18next';

// Services
import { getItemsById } from 'services/ItemService';

// Components
import Spinner from 'components/Spinner';
import PriceDisplay from 'components/PriceDisplay';
import Breadcrumb from 'components/Breadcrumb';

// Styles
import './ItemDetail.scss';

const ItemDetail = () => {
  const { id: itemId } = useParams();
  const history = useHistory();
  const [fetching, setFetching] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await getItemsById(itemId);
      setItem(response.data?.item);
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
  };

  const getFormattedMessage = () => {
    const { condition } = item;
    const soldQuantity = item.sold_quantity;
    let itemCondition = '';

    if (condition === 'new') {
      itemCondition = i18n.t('Novo');
    }

    if (condition === 'used') {
      itemCondition = i18n.t('Usado');
    }

    return i18n.t(`${itemCondition} - ${soldQuantity} vendidos`);
  };

  const renderPrice = () => {
    const amount = new Intl.NumberFormat('pt-BR').format(item.price?.amount);
    const decimals = item.price?.decimals;

    return (
      <PriceDisplay
        className="item-detail__details__price"
        amount={amount}
        decimals={decimals}
        symbol="$"
      />
    );
  };

  if (fetching) {
    return <Spinner />;
  }

  if (!fetching && !item) {
    history.push('/not-found');
  }

  return (
    <>
      <Breadcrumb items={item.categories} />
      <div className="item-detail">
        <div className="item-detail__resume">
          <figure className="item-detail__resume__image">
            <img src={item.picture} alt={item.title} />
          </figure>
          <div className="item-detail__resume__description">
            <span className="description-title">
              {i18n.t('Descrição do produto')}
            </span>
            <span className="description-content">{item.description}</span>
          </div>
        </div>
        <div className="item-detail__details">
          <span className="item-detail__details__condition">
            {getFormattedMessage()}
          </span>
          <span className="item-detail__details__name">{item.title}</span>
          {renderPrice()}

          <button
            type="button"
            className="item-detail__details__buy-button btn btn-primary"
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
