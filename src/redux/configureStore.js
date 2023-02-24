import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import gamesReducer from './reducers/gamesReducer';

const store = configureStore(
  {
    reducer: {
      games: gamesReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
