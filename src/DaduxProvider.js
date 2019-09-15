import React, { Component } from 'react';

import DaduxContext from './DaduxContext';

class DaduxProvider extends Component {
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
      <DaduxContext.Provider value={contextValue}>
        {children}
      </DaduxContext.Provider>
    )
  }
}

export default DaduxProvider;