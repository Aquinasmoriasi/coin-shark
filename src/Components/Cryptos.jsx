import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { fetchCryptos } from '../redux/currencies/currency';

const Countries = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state);

  useEffect(() => {
    if (!currencies.length) {
      dispatch(fetchCryptos());
    }
  }, [currencies.length, dispatch]);

  console.log(currencies);
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    color: '#fff',
  };

  // const style2 = {
  //   width: 'auto',
  //   height: '25vh',
  //   backgroundSize: '60%',
  //   backgroundRepeat: 'no-repeat',
  //   color: '#fff',
  //   fontSize: '18px',
  //   display: 'flex',
  //   flexDirection: 'column-reverse',
  //   alignItems: 'flex-end',
  //   textAlign: 'end',
  //   flexWrap: 'wrap',
  // };

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
    padding: '12px 5px',
    fontSize: '13px',
  };

  // const handleFetchTable = (e) => {
  //   const { id } = e.target.parentNode.parentNode;
  //   if (id) {
  //     dispatch(fetchTables(id));
  //   }
  // };

  return (
    <>
      <h1>haha</h1>
      {currencies.length && (
      <div style={{ ...style3, backgroundImage: `url(${currencies[0].image})` }}>
        <p>
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
          <div key={currency.name} style={{ ...style3, backgroundImage: `url(${currency.image})` }} className="coins">
            <p>
              Last Price:
              <span>
                $
                {currency.current_price}
              </span>
            </p>
            <p>{currency.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
