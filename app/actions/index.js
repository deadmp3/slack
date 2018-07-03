import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const selectChannel = createAction('CHANNEL_SELECT');

export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');
export const addMessage = (channelId, attrMessage) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    const { data: { data: { attributes } } } =
      await axios.post(routes.messagesUrl(channelId), { data: { attributes: attrMessage } });
    dispatch(addMessageSuccess({ message: attributes }));
  } catch (e) {
    console.log(e);
    dispatch(addMessageFailure());
  }
};

export const addChannelRequest = createAction('CHANNEL_ADD_REQUEST');
export const addChannelSuccess = createAction('CHANNEL_ADD_SUCCESS');
export const addChannelFailure = createAction('CHANNEL_ADD_FAILURE');
export const addChannel = attrChannel => async (dispatch) => {
  dispatch(addChannelRequest());
  try {
    const { data: { data: { attributes } } } =
      await axios.post(routes.channelsUrl(), { data: { attributes: attrChannel } });
    dispatch(addChannelSuccess({ channel: attributes }));
  } catch (e) {
    console.log(e);
    dispatch(addChannelFailure());
  }
};

export const editChannelRequest = createAction('CHANNEL_EDIT_REQUEST');
export const editChannelSuccess = createAction('CHANNEL_EDIT_SUCCESS');
export const editChannelFailure = createAction('CHANNEL_EDIT_FAILURE');
export const editChannel = (channelId, attrChannel) => async (dispatch) => {
  try {
    dispatch(editChannelRequest());
    const { data: { data: { attributes } } } =
      await axios.patch(routes.editChannelsUrl(channelId), { data: { attributes: attrChannel } });
    dispatch(editChannelRequest({ channel: attributes }));
  } catch (e) {
    console.log(e);
    dispatch(editChannelFailure());
  }
};

export const toggleModalStateAddChannel = createAction('MODAL_STATE_TOGGLE_ADD_CHANNEL');
export const toggleModalStateEditChannel = createAction('MODAL_STATE_TOGGLE_EDIT_CHANNEL');
