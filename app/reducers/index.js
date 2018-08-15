import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { omit } from 'lodash';
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
const channelDeletionState = handleActions({
  [actions.removeChannelRequest]() {
    return 'requested';
  },
  [actions.removeChannelSuccess]() {
    return 'successed';
  },
  [actions.removeChannelFailure]() {
    return 'failed';
  },
}, 'none');
const channels = handleActions({
  [actions.addChannelSuccess](state, { payload: { channel } }) {
    return { ...state, [channel.id]: channel };
  },
  [actions.editChannelSuccess](state, { payload: { channelId, name } }) {
    const updateChannel = { ...state[channelId], name };
    return { ...state, [updateChannel.id]: updateChannel };
  },
  [actions.removeChannelSuccess](state, { payload: { channelId } }) {
    return omit(state, [channelId]);
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
  // [actions.removeChannelSuccess](state, { payload: { channelId } }) {
  //   return omit(state, messages.filter(({ channelId })));
  // },
}, {});

const currentChannelId = handleActions({
  [actions.selectChannel](state, { payload: { id } }) {
    return id;
  },
  [actions.addChannelSuccess](state, { payload: { channel: { id } } }) {
    return id;
  },
}, 0);

const clearModalForm = () => '';

const modalForm = handleActions({
  [actions.setModalForm](state, { payload }) {
    return payload;
  },
  [actions.clearModalForm]: clearModalForm,
  [actions.addChannelSuccess]: clearModalForm,
}, '');


export default combineReducers({
  channelCreatingState,
  channelEditingState,
  channelDeletionState,
  channels,
  messageCreatingState,
  messages,
  currentChannelId,
  form: formReducer,
  modalForm,
});
