import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCryptos, setDetails } from '../redux/currencies/cryptos';

const Cryptos = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state);

  useEffect(() => {
    if (!currencies.length) {
      dispatch(fetchCryptos());
    }
  }, [currencies.length, dispatch]);

  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    color: '#fff',
  };

  const style3 = {
    width: 'auto',
    color: '#fff',
    height: '25vh',
    backgroundSize: '30%',
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

  const handleId = () => {
    const details = { haha: 'haha' };
    dispatch(setDetails(details));
  };

  return (
    <>
      {currencies.length && (
      <div style={{ ...style3, backgroundImage: `url(${currencies[0].image})` }}>
        <NavLink
          to="/Details"
          style={{
            position: 'absolute', top: '2px', right: '9px', color: 'green', fontSize: '30px',
          }}
          onClick={handleId}
        >
          <BsArrowRightCircle />
        </NavLink>
        <p style={style4}>
          Last Price:
          <span>
            $
            {currencies[0].current_price}
          </span>
        </p>
        <p>{currencies[0].name}</p>
      </div>
      )}
      <div style={style}>
        {currencies.map((currency) => (
          <>
            <div key={currency.symbol} style={{ ...style3, backgroundImage: `url(${currency.image})` }} className="coins">
              <p style={{ position: 'absolute', top: '5px', left: '9px' }}>{currency.symbol.toUpperCase()}</p>
              <p style={style4}>
                Last Price:
                <span>
                  $
                  {currency.current_price}
                </span>
              </p>
              <p>{currency.name}</p>
              <NavLink
                to="/Details"
                style={{
                  position: 'absolute', top: '2px', right: '9px', color: 'green', fontSize: '25px',
                }}
              >
                <BsArrowRightCircle />
              </NavLink>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cryptos;
