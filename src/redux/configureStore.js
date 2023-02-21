import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import clubsReducer from './reducers/chessReducer';

const store = configureStore(
  {
    reducer: {
      clubs: clubsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
