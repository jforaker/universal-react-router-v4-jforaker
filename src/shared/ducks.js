import axios from 'axios';
import { combineReducers } from 'redux';


export const FETCH_REPOS = 'app/FETCH_REPOS';

export const fetchRepos = () => async (dispatch, getState) => {
  const res = await axios.get('https://api.github.com/users/cnnlabs/repos');
  if (window) {
    console.log('getState()', getState());
    console.log('res client', res);
  }
  return dispatch({
    type: FETCH_REPOS,
    payload: res
  });
};

const repos = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return action.payload.data;
    default:
      return state;
  }
};

export default combineReducers({
  repos,
});