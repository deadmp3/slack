import React from 'react';
import NewMessageForm from './NewMessageForm';
import { messagesSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
    messageCreatingState: state.messageCreatingState,
    channelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
export default class Chat extends React.Component {
  render() {
    const {
      className,
      messages,
      messageCreatingState,
      channelId,
      addMessage,
    } = this.props;
    return (
      <div className={className}>
        {messages.map(({ id, text }) => (
          <li key={id}>
            {text}
          </li>))}
        <NewMessageForm
          channelId={channelId}
          addMessage={addMessage}
          messageCreatingState={messageCreatingState}
        />
      </div>
    );
  }
}
