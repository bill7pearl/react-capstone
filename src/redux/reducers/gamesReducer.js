import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_GAMES = 'FETCH_GAMES';
const initialState = {
  games: [],
};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6dc14e952msh45ef0c6ddd6c0eap192b42jsn2847d28df369',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())

const getGames = async () => {
  const res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options);
  const results = await res.json();
  const games = results.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.thumbnail,
    description: item.short_description,
    publisher: item.publisher,
    releaseDate: item.release_date,
  }));
  return games;
};


export const fetchGames = createAsyncThunk(
  FETCH_GAMES,
  async (post, thunkAPI) => {
    const payload = await getGames();
    thunkAPI.dispatch({ type: FETCH_GAMES, payload });
  },
);

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return { ...state, game: action.payload };
    default:
      return state;
  }
};

export default gamesReducer;
