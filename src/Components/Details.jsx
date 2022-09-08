import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const currencies = useSelector((state) => state);
  console.log(currencies);
  return (
    <>
      {currencies.length && <div style={{ backgroundColor: '#fff' }}>{currencies[0].name}</div>}
    </>
  );
};

export default Details;
