import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import AppContainer from './src/routes';
//import Hamburger from './src/components/Hamburger';

const ConnectedSubApp = connect(null)(AppContainer);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>

      <ConnectedSubApp />

    </Provider>
  );
}
