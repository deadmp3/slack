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

