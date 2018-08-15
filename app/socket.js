import io from 'socket.io-client';
import { addChannelSuccess, updateChannelSuccess, removeChannelSuccess, addMessageSuccess } from './actions';

const socket = io({
  autoConnect: false,
});

const delayReconnect = 10;
let reconnectTimerId;

const connectSocket = () => {
  socket.open();
  reconnectTimerId = setTimeout(connectSocket, delayReconnect * 1000);
};

socket.on('disconnect', () => {
  connectSocket();
});
socket.on('connect', () => {
  clearTimeout(reconnectTimerId);
});

export default (store) => {
  connectSocket();

  socket.on('newChannel', ({ data: { attributes } }) => store.dispatch(addChannelSuccess({ channel: attributes })));
  socket.on('renameChannel', ({ data: { attributes } }) => store.dispatch(updateChannelSuccess({ attributes })));
  socket.on('removeChannel', ({ data: { id } }) => store.dispatch(removeChannelSuccess({ id })));
  socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(addMessageSuccess({ message: attributes })));
};
