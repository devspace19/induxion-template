import * as types from './types';
import { getAnimals } from '../../../models/example';

export const actionChangeExample = (value) => ({type: types.EXAMPLE_CHANGE_TITLE, payload: value});

export const actionFetchExample = () => {
  return {
    types: [types.LOAD_ANIMAL, types.LOAD_ANIMAL_SUCCESS, types.LOAD_ANIMAL_FAIL],
    promise: () =>
      getAnimals()
        .then(res => res.json())
        .catch(err => err)
  }
};
