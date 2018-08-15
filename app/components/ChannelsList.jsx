import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import cn from 'classnames';
import NewChannelForm from './NewChannelForm';
import { channelsSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    channels: channelsSelector(state),
    currentChannelId: state.currentChannelId,
    channelCreatingState: state.channelCreatingState,
    modalForm: state.modalForm,
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
      modalForm,
      setModalForm,
    } = this.props;
    return (
      <ButtonGroup vertical className={className}>
        <Button onClick={() => setModalForm('AddChannel')}>Add</Button>
        <NewChannelForm
          addChannel={addChannel}
          channelCreatingState={channelCreatingState}
          modalForm={modalForm}
          setModalForm={setModalForm}
        />
        {channels.map(({ id, name }) => (
          <Button
            key={id}
            className={cn({ 'font-weight-bold': id === currentChannelId })}
            onClick={this.selectChannel(id)}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}
