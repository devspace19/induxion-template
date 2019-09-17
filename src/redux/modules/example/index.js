import * as types from './types';

const initialState = {
  title: 'Hello World..!'
};

const ACTION_HANDLERS = {
  [types.EXAMPLE_CHANGE_TITLE]: (state, action) => {
    return {
      ...state,
      title: action.payload
    }
  }
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
