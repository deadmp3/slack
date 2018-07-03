import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

@reduxForm({ form: 'newChannel' })
export default class NewChannelForm extends React.Component {
  addChannel = (values) => {
    this.props.addChannel(values);
    this.props.reset();
  }
  render() {
    const {
      channelCreatingState,
      handleSubmit,
      modalFormAddChannelActive,
      toggleModalStateAddChannel,
    } = this.props;
    const disabled = channelCreatingState === 'requested';

    return (
      <div>
        <div>
          <Button color="danger" onClick={toggleModalStateAddChannel}>Add</Button>
          <Modal isOpen={modalFormAddChannelActive} toggle={toggleModalStateAddChannel}>
            <ModalHeader toggle={toggleModalStateAddChannel}>Add channel</ModalHeader>
            <ModalBody>
              <Form inline autoComplete="off" action="" onSubmit={handleSubmit(this.addChannel)}>
                <Field className="flex-auto" name="name" required component="input" type="text" />
                <Button type="submit" className="btn btn-primary" disabled={disabled} onClick={toggleModalStateAddChannel}>OK</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
