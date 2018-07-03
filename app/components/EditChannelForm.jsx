import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

@reduxForm({ form: 'editChannel' })
export default class NewChannelForm extends React.Component {
  editChannel = (values) => {
    this.props.editChannel(this.props.channelId, values);
    this.props.reset();
  }
  render() {
    const {
      channelEditingState,
      handleSubmit,
      modalFormEditChannelActive,
      toggleModalStateEditChannel,
    } = this.props;
    const disabled = channelEditingState === 'requested';

    return (
      <div>
        <div>
          <Button color="danger" onClick={toggleModalStateEditChannel}>Edit channel</Button>
          <Modal isOpen={modalFormEditChannelActive} toggle={toggleModalStateEditChannel}>
            <ModalHeader toggle={toggleModalStateEditChannel}>Edit channel</ModalHeader>
            <ModalBody>
              <Form inline autoComplete="off" action="" onSubmit={handleSubmit(this.editChannel)}>
                <Field className="flex-auto" name="name" required component="input" type="text" />
                <Button type="submit" className="btn btn-primary" disabled={disabled} onClick={toggleModalStateEditChannel}>OK</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
