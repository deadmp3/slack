import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({}, {});

const messageCreatingState = handleActions({
  [actions.addMessageRequest]() {
    return 'requested';
  },
  [actions.addMessageSuccess]() {
    return 'successed';
  },
  [actions.addMessageFailure]() {
    return 'failed';
  },
}, 'none');
const messages = handleActions({
  [actions.addMessageSuccess](state, { payload: { message } }) {
    return { ...state, [message.id]: message };
  },
}, {});

const currentChannelId = handleActions({
  [actions.selectChannel](state, { payload: { id } }) {
    return id;
  },
}, 0);

export default combineReducers({
  channels,
  messageCreatingState,
  messages,
  currentChannelId,
  form: formReducer,
});
