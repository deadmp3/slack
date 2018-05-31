import { createSelector } from 'reselect';

const getChannels = state => state.channels;
export const channelsSelector = createSelector(
  getChannels,
  channels => Object.values(channels),
);
