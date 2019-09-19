const endPoint = 'http://demo3071873.mockable.io/getAnimal';

export const getAnimals = () => {
  return fetch(endPoint, {
    method: 'GET'
  });
};
