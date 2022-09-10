import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Cryptos from '../Components/Cryptos';
import currenciesReducer, { fetchCryptos } from '../redux/cryptocurrencies/cryptos';

describe('Cryptos', () => {
  it('should render the Cryptos component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cryptos />
        </BrowserRouter>
      </Provider>,
    );
    expect(Cryptos).toMatchSnapshot();
  });
});

describe('The reducer', () => {
  test('Should update the state with API data', () => {
    const coins = jest.mock();
    expect(currenciesReducer(coins, fetchCryptos(coins))).toEqual(coins);
  });
});
