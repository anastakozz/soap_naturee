import React from 'react';
import loadingGif from '../../assets/loading.gif';
import PropTypes from 'prop-types';

function LoadingSpinner({ marginTop = -50 }) {
  return (
    <div className={`loading-spinner w-big mx-auto mt-${marginTop} mb-big`}>
      <img src={loadingGif} alt="loading" />
    </div>
  );
}

LoadingSpinner.propTypes = {
  marginTop: PropTypes.number,
}

export default LoadingSpinner;
