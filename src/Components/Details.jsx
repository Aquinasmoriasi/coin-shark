import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

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
        <div
          style={{ ...style, backgroundImage: `url(${currency.image.large})` }}
        />
      )}
      <Table borderless hover variant="dark" className="text-light small">
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
      {/*
      <Table>
        <thead></thead>
      </Table> */}
      {/* <span></span>
          <span>
            $
            <br />
            BTC
          </span>
          <span>
            Market Cap:
          </span>
          {currency.market_cap_change_24h}
          {currency.market_cap_change_percentage_24h}
          {currency.circulating_supply}
          {currency.total_supply}
          {currency.max_supply}
          {currency.ath}
          {currency.ath_change_percentage}
          {currency.ath_date}
          {currency.atl}
          {currency.atl_change_percentage}
          {currency.atl_date}
          {currency.last_updated}
        </div> */}
    </>
  );
};

export default Details;

// <Nav variant='tabs' defaultActiveKey='/home'>
//   <Nav.Item>
//     <Nav.Link href='/home'>Active</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey='link-1'>Option 2</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey='disabled' disabled>
//       Disabled
//     </Nav.Link>
//   </Nav.Item>
// </Nav>;
