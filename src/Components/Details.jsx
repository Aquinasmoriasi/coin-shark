import React from 'react';
import Table from 'react-bootstrap/Table';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Details = () => {
  const currency = JSON.parse(localStorage.getItem('detail'));
  return (
    <div className="details">
      <NavLink
        to="/"
        style={{
          color: 'orange',
          padding: '12px 12px',
          fontSize: '30px',
        }}
      >
        <BsArrowLeftCircle />
      </NavLink>
      {currency && (
        <>
          <div
            style={{ backgroundImage: `url(${currency.image.large})` }}
            className="details-img"
          />
          <Table borderless striped hover variant="dark" className="text-light small">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{currency.name.toUpperCase()}</td>
              </tr>
              <tr>
                <td>Current Price</td>
                <td>
                  $
                  {currency.market_data.current_price.usd}
                  (&nbsp;
                  {currency.market_data.current_price.btc}
                  &nbsp;BTC )
                </td>
              </tr>
              <tr>
                <td>Market Cap</td>
                <td>
                  $
                  {currency.market_data.market_cap.usd}
                  (
                  {currency.market_data.market_cap.btc}
                  &nbsp;BTC)
                </td>
              </tr>
              <tr>
                <td>Market Cap Rank</td>
                <td>{currency.market_data.market_cap_rank}</td>
              </tr>
              <tr>
                <td>Total Volume</td>
                <td>
                  $
                  {currency.market_data.total_volume.usd}
                  &nbsp;(
                  {currency.market_data.market_cap.btc}
                  &nbsp;BTC )
                </td>
              </tr>
              <tr>
                <td>24Hr high</td>
                <td>
                  $
                  {currency.market_data.high_24h.usd}
                  &nbsp;(
                  {currency.market_data.market_cap.btc}
                  &nbsp;BTC )
                </td>
              </tr>
              <tr>
                <td>24Hr Low</td>
                <td>
                  $
                  {currency.market_data.low_24h.usd}
                  &nbsp;(
                  {currency.market_data.market_cap.btc}
                  &nbsp;BTC )
                </td>
              </tr>
              <tr>
                <td>24Hr Change</td>
                <td style={currency.market_data.price_change_percentage_24h > 0 ? { color: 'green' } : { color: 'red' }}>
                  {currency.market_data.price_change_percentage_24h}
                  &nbsp;%
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Details;
