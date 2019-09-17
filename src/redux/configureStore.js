import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reduxMiddleware from './reduxMiddleware';
import reducers from './reducers';
import actionCreators from './actions';

export default function configureStore(preloadedState = {}) {
  // const DEV = process.env.NODE_ENV !== 'production';
  const middleware = [reduxMiddleware(), thunk];
  let composeEnhancers = compose;

  // TODO for suport ssr
  // if (process.env.BROWSER && DEV) {
  // }
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators
    });
  }

  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducers(require('./reducers').default);
    });
  }

  return store;
}
