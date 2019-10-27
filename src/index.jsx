import React from 'react';
import { Provider as RootProvider, inject } from 'induxion';

import * as actionsCreator from './redux/actions';
import * as reducersCreator from './redux/reducers';

const Provider = ({ children, actions = {}, reducers = {} }) => {
  const _actions = {
    ...actions,
    ...actionsCreator
  };
  const _reducers = {
    ...reducers,
    ...reducersCreator
  };

  return (
    <RootProvider actions={_actions} reducers={_reducers}>
      {children}
    </RootProvider>
  );
};

export { Provider, inject };
