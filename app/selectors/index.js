import { createSelector } from 'reselect';

const getChannels = state => state.channels;
export const channelsSelector = createSelector(
  getChannels,
  channels => Object.values(channels),
);

const getMessages = state => state.messages;
const getChannelId = state => state.currentChannelId;
export const messagesSelector = createSelector(
  getMessages,
  getChannelId,
  (messages, channelId) => Object.values(messages)
    .filter(m => m.channelId === channelId),
);
