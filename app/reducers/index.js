import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const channels = handleActions({}, {});
const messages = handleActions({}, {});
const currentChannelId = handleActions({
  [actions.selectChannel](state, { payload: { id } }) {
    return id;
  },
}, 0);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
});
