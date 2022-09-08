const GET_DETAILS = 'cryptocurrencies/cryptocurrencies/GET_DETAILS';
const initialState = {};

export const setDetails = (details) => ({
  type: GET_DETAILS,
  payload: details,
});

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
