import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from './../index';

describe('Provider', () => {
  it('test snapshot', () => {
    const provider = shallow(<Provider />);
    expect(provider).toMatchSnapshot();
  });
});
