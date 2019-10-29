import * as types from './types';

const initialState = {
  title: 'Hello World..!',
  animals: {
    isFetching: false,
    data: []
  }
};

const ACTION_HANDLERS = {
  [types.EXAMPLE_CHANGE_TITLE_APPS]: (state, action) => {
    return {
      ...state,
      title: action.payload
    };
  },

  [types.LOAD_ANIMAL_APPS]: state => {
    return {
      ...state,
      animals: {
        ...state.animals,
        isFetching: true
      }
    };
  },

  [types.LOAD_ANIMAL_SUCCESS_APPS]: (state, action) => {
    const data = action.result.data || [];

    return {
      ...state,
      animals: {
        ...state.animals,
        isFetching: false,
        data
      }
    };
  },

  [types.LOAD_ANIMAL_FAIL_APPS]: state => {
    return {
      ...state,
      animals: {
        ...state.animals,
        isFetching: false
      }
    };
  }
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
