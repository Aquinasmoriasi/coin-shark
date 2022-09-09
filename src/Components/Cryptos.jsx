import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCryptos } from '../redux/cryptocurrencies/cryptos';
import Search from './Search';
import Footer from './Footer';

const Cryptos = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state);
  useEffect(() => {
    if (!cryptos.length) {
      dispatch(fetchCryptos());
    }
  }, [cryptos.length, dispatch]);

  const handleId = (e) => {
    localStorage.clear();
    const detail = cryptos.find((crypto) => crypto.symbol === e.target.id);
    localStorage.setItem('detail', JSON.stringify(detail));
  };

  const [param, setSearch] = useState('');
  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearch(query);
  };

  const filteredCryptos = cryptos.filter((crypto) => crypto.name.replace(/-/, '').toLowerCase().includes(param));

  return (
    <>
      <h1 style={{ color: '#fff', textAlign: 'center' }}>Cryptocurrencies</h1>
      <Search param={param} handleSearch={handleSearch} />
      {!filteredCryptos.length && <div className="loader" />}
      {filteredCryptos.length && (
        <div
          style={{
            backgroundImage: `url(${cryptos[31].image.large})`,
          }}
          className="all-coins"
        >
          <NavLink
            to={`/Details/${cryptos[31].id}`}
            style={{
              position: 'absolute',
              top: '2px',
              right: '9px',
              color: 'orange',
              fontSize: '30px',
            }}
          >
            <BsArrowRightCircle id={cryptos[31].symbol} onClick={handleId} />
          </NavLink>
          <div className="currency-details">
            <p className="currency-price">
              <span> Current Price:</span>
              <span>
                $
                {cryptos[31].market_data.current_price.usd}
              </span>
            </p>
            <span>{cryptos[31].name}</span>
          </div>
        </div>
      )}
      <div className="coins-container">
        {filteredCryptos.map((currency) => (
          <div key={currency.symbol} className="coins">
            <div
              style={{
                backgroundImage: `url(${currency.image.large})`,
              }}
            >
              <p style={{ position: 'absolute', top: '14px', left: '9px' }}>
                {currency.symbol.toUpperCase()}
              </p>
              <div className="currency-details">
                <p className="currency-price">
                  <span> Current Price:</span>
                  <span>
                    $
                    {currency.market_data.current_price.usd}
                  </span>
                </p>
                <span>{currency.name}</span>
              </div>
              <NavLink
                to={`/Details/${currency.id}`}
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
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cryptos;
