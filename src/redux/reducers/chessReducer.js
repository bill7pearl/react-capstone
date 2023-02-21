import { createAsyncThunk } from '@reduxjs/toolkit';

// const CHESS_CLUB_API = 'https://www.freetogame.com/api/games';
const FETCH_CLUBS = 'FETCH_ROCKETS';
const initialState = {};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6dc14e952msh45ef0c6ddd6c0eap192b42jsn2847d28df369',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
	.then(response => response.json())
	.catch(err => console.error(err));

const getClubs = async () => {
  const res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options);
  const results = await res.json();
  const clubs = results.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.thumbnail,
    description: item.short_description,
  }));
  console.log(clubs)
  return clubs;
};


export const fetchClubs = createAsyncThunk(
  FETCH_CLUBS,
  async (post, thunkAPI) => {
    const payload = await getClubs();
    thunkAPI.dispatch({ type: FETCH_CLUBS, payload });
  },
);

const clubsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLUBS:
      return { ...state, club: action.payload };
    default:
      return state;
  }
};

export default clubsReducer;
