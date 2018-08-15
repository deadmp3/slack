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
export const editChannel = (channelId, name) => async (dispatch) => {
  try {
    dispatch(editChannelRequest());
    await axios.patch(routes.channelUrl(channelId), { data: { attributes: { name } } });
    dispatch(editChannelSuccess({ channelId, name }));
  } catch (e) {
    console.log(e);
    dispatch(editChannelFailure());
  }
};

export const removeChannelRequest = createAction('CHANNEL_REMOVEL_REQUEST');
export const removeChannelSuccess = createAction('CHANNEL_REMOVEL_SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVEL_FAILURE');
export const removeChannel = channelId => async (dispatch) => {
  try {
    dispatch(removeChannelRequest());
    await axios.delete(routes.channelUrl(channelId));
    dispatch(removeChannelSuccess({ channelId }));
  } catch (e) {
    console.log(e);
    dispatch(removeChannelFailure());
  }
};

export const setModalForm = createAction('MODAL_FORM_SET');
export const clearModalForm = createAction('MODAL_FORM_CLEAR');
