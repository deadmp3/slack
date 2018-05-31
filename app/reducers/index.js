import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const channels = handleActions({}, {});
const messages = handleActions({}, {});
const currentChannelId = handleActions({}, 0);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
});
