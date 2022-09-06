import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_LEAGUES = 'bookstore-app/books/GET_BOOKS';

export const fetchLeagues = createAsyncThunk(
  GET_LEAGUES,
  async () => {
    const data = await fetch('https://api-football-standings.azharimm.site/leagues/');
    const response = await data.json();
    const identifiers = response.data.map((res) => ({
      name: res.name,
      id: res.id,
      logo: res.logos.light,
    }));
    return identifiers;
  },
);

const initialState = [];

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_LEAGUES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default leaguesReducer;
