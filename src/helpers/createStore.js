import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import repos from '../shared/ducks'

export default req => {

  return createStore(
    repos,
    {},
    applyMiddleware(thunk) //.withExtraArgument(axiosInstance)
  );
};
