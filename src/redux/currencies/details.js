const GET_DETAILS = 'crypto-currencies/currencies/GET_ DETAIL';
const initialState = {};

export const setDetails = (details) => ({
  type: GET_DETAILS,
  details,
});

const detailsReducer = (state = initialState, action) => {
  switch (action) {
    case GET_DETAILS:
      return action.details;
    default:
      return state;
  }
};

export default detailsReducer;
