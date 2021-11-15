import React from 'react';
import PropTypes from 'prop-types';

const PriceDisplay = ({ className, amount, decimals, symbol }) => (
  <div className={className}>
    <span className="price-amount">{`${symbol} ${amount}`}</span>

    <span className="price-decimals">{decimals}</span>
  </div>
);

PriceDisplay.propTypes = {
  className: PropTypes.string,
  amount: PropTypes.string,
  decimals: PropTypes.string,
  symbol: PropTypes.string,
};

PriceDisplay.defaultProps = {
  className: '',
  amount: '',
  decimals: '',
  symbol: '',
};

export default PriceDisplay;
