import React from 'react';
import i18n from 'i18next';

import './NotFoundItem.scss';

const NotFoundItem = () => (
  <div className="page-not-found-item">
    <span>{i18n.t('Not Found Item(s)')}</span>
  </div>
);

export default NotFoundItem;
