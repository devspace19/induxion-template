import React from 'react';

import DaduxContext from './DaduxContext';

const withDadux = Component => {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <DaduxContext.Consumer>
      {context => (
        <Component
          {...props}
          ref={ref}
          data={context.data}
        />
      )}
    </DaduxContext.Consumer>
  ));

  return WrappedComponent;
};

export default withDadux;
