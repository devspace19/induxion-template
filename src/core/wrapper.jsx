import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../redux/configureStore';

const AppProvider = ({children}) => <Provider store={configureStore()}>{children}</Provider>;
export default AppProvider;