import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { IoIosArrowForward } from 'react-icons/io';

// Styles
import './Breadcrumb.scss';

const Breadcrumb = ({ items = [] }) => {
  const itemsBreadcrumb = items.map((item, index) => ({
    label: item,
    id: index,
  }));

  const getComponentClasses = (isLastItemOfList) =>
    [
      'breadcrumb__container__item',
      isLastItemOfList && 'breadcrumb__container__item--last-item',
    ].join(' ');

  const renderItems = () =>
    itemsBreadcrumb.map((item, index) => {
      const isLastItemOfList = index === itemsBreadcrumb.length - 1;

      return (
        <div className="breadcrumb__container" key={item.id}>
          <li className={getComponentClasses(isLastItemOfList)}>
            {item.label}
          </li>
          <span className="breadcrumb__container__separator">
            {!isLastItemOfList ? <IoIosArrowForward /> : null}
          </span>
        </div>
      );
    });

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb">{renderItems()}</ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumb.defaultProps = {
  items: [''],
};

export default Breadcrumb;
