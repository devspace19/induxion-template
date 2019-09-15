import React from 'react';
import { render} from 'react-dom';

import App from './App';
import { DaduxProvider } from '../../src';

render(<DaduxProvider><App /></DaduxProvider>, document.getElementById("app"));