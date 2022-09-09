import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCryptos } from '../redux/cryptocurrencies/cryptos';
import { setDetails } from '../redux/cryptocurrencies/details';
import Search from './Search';

const Cryptos = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptos);
  useEffect(() => {
    if (!cryptos.length) {
      dispatch(fetchCryptos());
    }
  }, [cryptos.length, dispatch]);

  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    color: '#fff',
  };

  const style3 = {
    width: 'auto',
    color: 'rgb(255, 235, 235)',
    height: '25vh',
    backgroundSize: '35%',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    textAlign: 'end',
    flexWrap: 'wrap',
    padding: '12px',
    fontSize: '13px',
    position: 'relative',
  };

  const style4 = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const handleId = (e) => {
    const detail = cryptos.find((crypto) => crypto.symbol === e.target.id);
    dispatch(setDetails(detail));
  };

  const [param, setSearch] = useState('');
  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearch(query);
  };

  const filteredCryptos = cryptos.filter((crypto) => crypto.name.replace(/-/, '').toLowerCase().includes(param));

  return (
    <>
      <h1 style={{ color: '#fff' }}>All currencies</h1>
      <Search param={param} handleSearch={handleSearch} />
      {cryptos.length && (
        <div
          style={{
            ...style3,
            backgroundImage: `url(${cryptos[0].image.large})`,
          }}
        >
          <NavLink
            to="/Details"
            style={{
              position: 'absolute',
              top: '2px',
              right: '9px',
              color: 'orange',
              fontSize: '30px',
            }}
          >
            <BsArrowRightCircle id={cryptos[0].symbol} onClick={handleId} />
          </NavLink>
          <p style={style4}>
            Current Price:
            <span>
              $
              {cryptos[0].market_data.current_price.usd}
            </span>
          </p>
          <p>{cryptos[0].name}</p>
        </div>
      )}
      <div style={style}>
        {filteredCryptos.map((currency) => (
          <>
            <div
              key={currency.symbol}
              style={{
                ...style3,
                backgroundImage: `url(${currency.image.large})`,
              }}
              className="coins"
            >
              <p style={{ position: 'absolute', top: '5px', left: '9px' }}>
                {currency.symbol.toUpperCase()}
              </p>
              <p style={style4}>
                Current Price:
                <span>
                  $
                  {currency.market_data.current_price.usd}
                </span>
              </p>
              <p>{currency.name}</p>
              <NavLink
                to="/Details"
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '9px',
                  color: 'orange',
                  fontSize: '25px',
                }}
              >
                <BsArrowRightCircle id={currency.symbol} onClick={handleId} />
              </NavLink>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cryptos;
