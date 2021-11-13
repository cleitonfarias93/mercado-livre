import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { IoIosArrowForward } from 'react-icons/io';

// Styles
import './Breadcrumb.scss';

const Breadcrumb = ({ items = [] }) => {
  const getComponentClasses = (isLastItemOfList) =>
    [
      'breadcrumb__item',
      isLastItemOfList && 'breadcrumb__item--last-item',
    ].join(' ');

  const renderItems = () =>
    items.map((item, index) => {
      const isLastItemOfList = index === items.length - 1;

      return (
        <>
          <li className={getComponentClasses(isLastItemOfList)}>{item}</li>
          <span className="breadcrumb__separator">
            {!isLastItemOfList ? <IoIosArrowForward /> : null}
          </span>
        </>
      );
    });

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb">{renderItems()}</ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumb;
