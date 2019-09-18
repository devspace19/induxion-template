import * as types from './types';

const initialState = {
  title: 'Hello World..!',
  animals: {
    isFetching: false,
    data: []
  }
};

const ACTION_HANDLERS = {
  [types.EXAMPLE_CHANGE_TITLE]: (state, action) => {
    return {
      ...state,
      title: action.payload
    };
  },

  [types.LOAD_ANIMAL]: state => {
    return {
      ...state,
      animals: {
        ...state.animals,
        isFetching: true
      }
    };
  },

  [types.LOAD_ANIMAL_SUCCESS]: (state, action) => {
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

  [types.LOAD_ANIMAL_FAIL]: state => {
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
