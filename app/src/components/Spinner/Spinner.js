import React from 'react';

// Styles
import './Spinner.scss';

const Spinner = () => (
  <div className="spinning">
    <div className="spinner-border text-warning" role="status" />
  </div>
);

export default Spinner;
