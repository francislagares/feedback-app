import React from 'react';
import spinner from '../assets/spinner.gif';

const Spinner = () => {
  const styles = {
    width: '100px',
    margin: 'auto',
    display: 'block',
  };

  return <img src={spinner} alt='loading...' style={styles} />;
};

export default Spinner;
