import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_ALL_MOVIES_IN_CINEMA: return action.payload;
    case constants.UPCOMING_MOVIES: return action.payload;
    default: return state;
  }
}
