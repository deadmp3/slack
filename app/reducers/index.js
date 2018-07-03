import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channelCreatingState = handleActions({
  [actions.addChannelRequest]() {
    return 'requested';
  },
  [actions.addChannelSuccess]() {
    return 'successed';
  },
  [actions.addChannelFailure]() {
    return 'failed';
  },
}, 'none');
const channelEditingState = handleActions({
  [actions.editChannelRequest]() {
    return 'requested';
  },
  [actions.editChannelSuccess]() {
    return 'successed';
  },
  [actions.editChannelFailure]() {
    return 'failed';
  },
}, 'none');
const channels = handleActions({
  [actions.addChannelSuccess](state, { payload: { channel } }) {
    return { ...state, [channel.id]: channel };
  },
  [actions.editChannelSuccess](state, { payload: { channel } }) {
    return { ...state, [channel.id]: channel };
  },
}, {});

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
  [actions.addChannelSuccess](state, { payload: { channel: { id } } }) {
    return id;
  },
}, 0);

const modalFormAddChannelActive = handleActions({
  [actions.toggleModalStateAddChannel](state) {
    return !state;
  },

}, false);

const modalFormEditChannelActive = handleActions({
  [actions.toggleModalStateEditChannel](state) {
    return !state;
  },
}, false);

export default combineReducers({
  channelCreatingState,
  channelEditingState,
  channels,
  messageCreatingState,
  messages,
  currentChannelId,
  form: formReducer,
  modalFormAddChannelActive,
  modalFormEditChannelActive,
});
