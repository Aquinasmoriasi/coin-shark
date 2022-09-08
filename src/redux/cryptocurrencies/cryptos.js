import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_CRYPTOS = 'crypto-currencies/currencies/GET_CURRENCY';
const initialState = [];

export const fetchCryptos = createAsyncThunk(
  GET_CRYPTOS,
  // https://api.coingecko.com/api/v3/coins/
  async () => {
    const response = [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: {
          thumb:
            'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
          large:
            'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        },
        market_data: {
          current_price: {
            btc: 1,
            usd: 19323.73,
          },
          market_cap: {
            btc: 19144731,
            usd: 369947615954,
          },
          market_cap_rank: 1,
          total_volume: {
            btc: 1553849,
            usd: 30016273100,
          },
          high_24h: {
            btc: 1,
            usd: 100,
          },
          low_24h: {
            btc: 1,
            usd: 289,
          },
          price_change_24h: 596.829,
          price_change_percentage_24h: 3.18702,
          price_change_percentage_7d: -3.49501,
          price_change_percentage_14d: -9.68303,
          price_change_percentage_30d: -18.88856,
          price_change_percentage_60d: -10.49531,
          price_change_percentage_200d: -51.92236,
          price_change_percentage_1y: -58.88145,
          market_cap_change_24h: 11441473086,
          market_cap_change_percentage_24h: 3.19143,
        },
        price_change_percentage_1h_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_24h_in_currency: {
          btc: 0,
          usd: 90,
        },
        price_change_percentage_7d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_14d_in_currency: {
          btc: 0,
          usd: 0,
        },
        price_change_percentage_30d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_1y_in_currency: {
          btc: 0,
          usd: 9,
        },
      },
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: {
          thumb:
            'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
          large:
            'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        },
        market_data: {
          current_price: {
            btc: 1,
            usd: 19323.73,
          },
          market_cap: {
            btc: 19144731,
            usd: 369947615954,
          },
          market_cap_rank: 1,
          total_volume: {
            btc: 1553849,
            usd: 30016273100,
          },
          high_24h: {
            btc: 1,
            usd: 100,
          },
          low_24h: {
            btc: 1,
            usd: 289,
          },
          price_change_24h: 596.829,
          price_change_percentage_24h: 3.18702,
          price_change_percentage_7d: -3.49501,
          price_change_percentage_14d: -9.68303,
          price_change_percentage_30d: -18.88856,
          price_change_percentage_60d: -10.49531,
          price_change_percentage_200d: -51.92236,
          price_change_percentage_1y: -58.88145,
          market_cap_change_24h: 11441473086,
          market_cap_change_percentage_24h: 3.19143,
        },
        price_change_percentage_1h_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_24h_in_currency: {
          btc: 0,
          usd: 90,
        },
        price_change_percentage_7d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_14d_in_currency: {
          btc: 0,
          usd: 0,
        },
        price_change_percentage_30d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_1y_in_currency: {
          btc: 0,
          usd: 9,
        },
      },
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: {
          thumb:
            'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
          large:
            'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        },
        market_data: {
          current_price: {
            btc: 1,
            usd: 19323.73,
          },
          market_cap: {
            btc: 19144731,
            usd: 369947615954,
          },
          market_cap_rank: 1,
          total_volume: {
            btc: 1553849,
            usd: 30016273100,
          },
          high_24h: {
            btc: 1,
            usd: 100,
          },
          low_24h: {
            btc: 1,
            usd: 289,
          },
          price_change_24h: 596.829,
          price_change_percentage_24h: 3.18702,
          price_change_percentage_7d: -3.49501,
          price_change_percentage_14d: -9.68303,
          price_change_percentage_30d: -18.88856,
          price_change_percentage_60d: -10.49531,
          price_change_percentage_200d: -51.92236,
          price_change_percentage_1y: -58.88145,
          market_cap_change_24h: 11441473086,
          market_cap_change_percentage_24h: 3.19143,
        },
        price_change_percentage_1h_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_24h_in_currency: {
          btc: 0,
          usd: 90,
        },
        price_change_percentage_7d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_14d_in_currency: {
          btc: 0,
          usd: 0,
        },
        price_change_percentage_30d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_1y_in_currency: {
          btc: 0,
          usd: 9,
        },
      },
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: {
          thumb:
            'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
          large:
            'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        },
        market_data: {
          current_price: {
            btc: 1,
            usd: 19323.73,
          },
          market_cap: {
            btc: 19144731,
            usd: 369947615954,
          },
          market_cap_rank: 1,
          total_volume: {
            btc: 1553849,
            usd: 30016273100,
          },
          high_24h: {
            btc: 1,
            usd: 100,
          },
          low_24h: {
            btc: 1,
            usd: 289,
          },
          price_change_24h: 596.829,
          price_change_percentage_24h: -3.18702,
          price_change_percentage_7d: -3.49501,
          price_change_percentage_14d: -9.68303,
          price_change_percentage_30d: -18.88856,
          price_change_percentage_60d: -10.49531,
          price_change_percentage_200d: -51.92236,
          price_change_percentage_1y: -58.88145,
          market_cap_change_24h: 11441473086,
          market_cap_change_percentage_24h: 3.19143,
        },
        price_change_percentage_1h_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_24h_in_currency: {
          btc: 0,
          usd: 90,
        },
        price_change_percentage_7d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_14d_in_currency: {
          btc: 0,
          usd: 0,
        },
        price_change_percentage_30d_in_currency: {
          btc: 0,
          usd: 900,
        },
        price_change_percentage_1y_in_currency: {
          btc: 0,
          usd: 9,
        },
      },
    ];
    return response;
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
