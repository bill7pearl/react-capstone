import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><Home /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});