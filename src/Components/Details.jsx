import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const currency = useSelector((state) => state.details);
  const style = {
    width: '100vw',
    color: '#fff',
    height: '25vh',
    backgroundSize: '50%',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    textAlign: 'end',
    flexWrap: 'wrap',
    fontSize: '13px',
    position: 'relative',
    padding: '23px',
  };

  return (
    <>
      {currency && (
      <div style={{ ...style, backgroundImage: `url(${currency.image})` }}>
        {currency.name.toUpperCase()}
        {currency.current_price}
        {currency.market_cap}
        {currency.market_cap_rank}
        {currency.total_volume}
        high_24h: 19312.29,
        low_24h: 18644.13,
        price_change_24h: 349.31,
        price_change_percentage_24h: 1.84217,
        market_cap_change_24h: 6796894058,
        market_cap_change_percentage_24h: 1.87298,
        circulating_supply: 19144231,
        total_supply: 21000000,
        max_supply: 21000000,
        ath: 69045,
        ath_change_percentage: -72.25707,
        ath_date: '2021-11-10T14:24:11.849Z',
        atl: 67.81,
        atl_change_percentage: 28148.52061,
        atl_date: '2013-07-06T00:00:00.000Z',
        roi: null,
        last_updated:
      </div>
      )}
    </>
  );
};

export default Details;
