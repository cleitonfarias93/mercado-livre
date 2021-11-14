import React from 'react';

// Styles
import './Spinner.scss';

const Spinner = () => {
  console.log('Spinner');
  return (
    <div className="spinning">
      <div className="spinner-border text-warning" role="status" />
    </div>
  );
};

export default Spinner;
