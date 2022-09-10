import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Footer from '../Components/Footer';

describe('Footer', () => {
  test('should render the Footer component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>,
    );
    expect(Footer).toMatchSnapshot();
  });
});
