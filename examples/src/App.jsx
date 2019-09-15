import React, { Component } from 'react';

import { withDadux } from './../../src';

class App extends Component {
  render() {
    console.log('ALAL === ', this.props);

    return(
      <div>
        App
      </div>
    );
  }
}

export default withDadux(App);