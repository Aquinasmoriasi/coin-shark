import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_CRYPTOS = 'crypto-currencies/currencies/GET_CURRENCY';
const initialState = [];

export const fetchCryptos = createAsyncThunk(
  GET_CRYPTOS,
  async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/');
    const response = await data.json();
    const filteredResponse = response.slice(0, 20);
    return filteredResponse;
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
