import * as types from './types';
import { getAnimals } from '../../../models/example';

export const actionChangeExampleAPPS = value => ({
  type: types.EXAMPLE_CHANGE_TITLE_APPS,
  payload: value
});

export const actionFetchExampleAPPS = () => {
  return {
    types: [
      types.LOAD_ANIMAL_APPS,
      types.LOAD_ANIMAL_SUCCESS_APPS,
      types.LOAD_ANIMAL_FAIL_APPS
    ],
    promise: () =>
      getAnimals()
        .then(res => res.json())
        .catch(err => err)
  };
};
