import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import GameDetails from '../components/Details';
import store from '../redux/configureStore'

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><GameDetails /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});