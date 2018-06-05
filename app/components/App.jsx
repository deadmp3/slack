import React from 'react';
import ChannelsList from './ChannelsList';
import Chat from './Chat';

export default () => (
  <div className="row">
    <ChannelsList className="col-4" />
    <Chat className="col-8" />
  </div>);
