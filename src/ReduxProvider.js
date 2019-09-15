import React, { Component } from 'react';

import ReduxContext from './ReduxContext';

class ReduxProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contextValue: {
        data: []
      }
    };
  }

  render() {
    const { contextValue } = this.state;

    return (
      <ReduxContext.Provider value={contextValue}>
        {children}
      </ReduxContext.Provider>
    )
  }
}

export default ReduxProvider;