import React, { Fragment } from 'react';
import Landing from './Landing';
import { Wrapper } from '@devspace/induxion';

class App extends React.Component {
  render = () => {
    return (
      <Fragment>
        <Wrapper>
          <Landing />
        </Wrapper>
      </Fragment>
    );
  };
}
export default App;
