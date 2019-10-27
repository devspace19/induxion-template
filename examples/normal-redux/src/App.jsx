import React, { Fragment } from 'react';
import { Provider } from '../../../build/index';

import Landing from './Landing';
import * as actions from './redux/actions';
import * as reducers from './redux/reducers';

class App extends React.Component {
  render = () => {
    return (
      <Fragment>
        <Provider actions={actions} reducers={reducers}>
          <Landing />
        </Provider>
      </Fragment>
    );
  };
}
export default App;
