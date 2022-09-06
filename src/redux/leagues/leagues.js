import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_LEAGUES = 'bookstore-app/books/GET_LEAGUES';
const GET_TABLE = 'bookstore-app/books/GET_TABLE';
const initialState = [];

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

export const fetchTables = createAsyncThunk(GET_TABLE, async (id) => {
  const data = await fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings`);
  const response = await data.json();
  const standing = response.data.standings;
  const stats = standing.map((res) => ({
    name: res.team.name,
    logo: res.team.logos[0].href,
    stats: {
      wins: res.stats[0].value,
      losses: res.stats[1].value,
      draws: res.stats[2].value,
      p: res.stats[3].value,
      gf: res.stats[4].value,
      ga: res.stats[5].value,
      points: res.stats[6].value,
      change: res.stats[7].value,
      rank: res.stats[8].value,
      gd: res.stats[9].value,
    },
  }));
  return stats;
});

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_LEAGUES}/fulfilled`:
      return action.payload;
    case `${GET_TABLE}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default leaguesReducer;
