import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_CRYPTOS = 'crypto-currencies/currencies/GET_CURRENCY';
const initialState = [];

export const fetchCryptos = createAsyncThunk(
  GET_CRYPTOS,
  async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/');
    const response = await data.json();
    const arr = [];
    const keys = Object.keys(response);
    keys.map((key) => arr.push({
      id: response[key].id,
      symbol: response[key].symbol,
      name: response[key].name,
      image: {
        large: response[key].image.large,
      },
      market_data: {
        current_price: {
          btc: response[key].market_data.current_price.btc,
          usd: response[key].market_data.current_price.usd,
        },
        market_cap: {
          btc: response[key].market_data.market_cap.btc,
          usd: response[key].market_data.market_cap.usd,
        },
        market_cap_rank: response[key].market_data.market_cap_rank,
        total_volume: {
          btc: response[key].market_data.total_volume.btc,
          usd: response[key].market_data.total_volume.usd,
        },
        high_24h: {
          btc: response[key].market_data.high_24h.btc,
          usd: response[key].market_data.high_24h.usd,
        },
        low_24h: {
          btc: response[key].market_data.low_24h.btc,
          usd: response[key].market_data.low_24h.usd,
        },
        price_change_percentage_24h:
            response[key].market_data.price_change_percentage_24h,
      },
    }));
    return arr;
  },
);

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CRYPTOS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default currenciesReducer;
