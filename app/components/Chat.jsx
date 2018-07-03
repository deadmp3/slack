import React from 'react';
import NewMessageForm from './NewMessageForm';
import EditChannelForm from './EditChannelForm';
import { messagesSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
    messageCreatingState: state.messageCreatingState,
    channelId: state.currentChannelId,
    channelCreatingState: state.channelCreatingState,
    modalFormEditChannelActive: state.modalFormEditChannelActive,
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
      editChannel,
      channelEditingState,
      modalFormEditChannelActive,
      toggleModalStateEditChannel,
    } = this.props;
    return (
      <div className={className}>
        <EditChannelForm
          channelId={channelId}
          editChannel={editChannel}
          channelEditingState={channelEditingState}
          modalFormEditChannelActive={modalFormEditChannelActive}
          toggleModalStateEditChannel={toggleModalStateEditChannel}
        />
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
