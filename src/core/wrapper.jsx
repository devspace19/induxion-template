import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

const AppProvider = ({children}) => <Provider store={store}>{children}</Provider>;
export default AppProvider;