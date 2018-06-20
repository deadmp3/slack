import React from 'react';
import cn from 'classnames';
import NewChannelForm from './NewChannelForm';
import { channelsSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    channels: channelsSelector(state),
    currentChannelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
export default class ChannelsList extends React.Component {
  selectChannel = id => (e) => {
    e.preventDefault();
    this.props.selectChannel({ id });
  }

  render() {
    const {
      className,
      channels,
      currentChannelId,
      addChannel,
      channelCreatingState,
    } = this.props;
    return (
      <ul className={className}>
        {channels.map(({ id, name }) => (
          <li key={id}>
            <button
              className={cn({ 'font-weight-bold': id === currentChannelId })}
              onClick={this.selectChannel(id)}
            >
              {name}
            </button>
          </li>
        ))}
        <NewChannelForm
          addChannel={addChannel}
          channelCreatingState={channelCreatingState}
        />
      </ul>
    );
  }
}
