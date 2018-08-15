import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import NewMessageForm from './NewMessageForm';
import EditChannelForm from './EditChannelForm';
import RemoveChannelForm from './RemoveChannelForm';
import { messagesSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
    messageCreatingState: state.messageCreatingState,
    channelId: state.currentChannelId,
    channelCreatingState: state.channelCreatingState,
    channelDeletionState: state.channelDeletionState,
    modalForm: state.modalForm,
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
      removeChannel,
      channelEditingState,
      channelDeletionState,
      modalForm,
      setModalForm,
    } = this.props;
    return (
      <div className={className}>
        <ButtonGroup>
          <Button onClick={() => setModalForm('EditChannel')}>Edit channel</Button>
          <Button onClick={() => setModalForm('removeChannel')}>Remove channel</Button>
        </ButtonGroup>
        <ListGroup>
          {messages.map(({ id, text }) => (
            <ListGroupItem key={id}>
              {text}
            </ListGroupItem>))}
        </ListGroup>
        <NewMessageForm
          channelId={channelId}
          addMessage={addMessage}
          messageCreatingState={messageCreatingState}
        />
        <EditChannelForm
          channelId={channelId}
          editChannel={editChannel}
          channelEditingState={channelEditingState}
          modalForm={modalForm}
          setModalForm={setModalForm}
        />
        <RemoveChannelForm
          channelId={channelId}
          removeChannel={removeChannel}
          channelDeletionState={channelDeletionState}
          modalForm={modalForm}
          setModalForm={setModalForm}
        />
      </div>
    );
  }
}
