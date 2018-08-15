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
      modalForm,
      setModalForm,
      clearModalForm,
    } = this.props;
    const disabled = channelCreatingState === 'requested';

    return (
      <div>
        <div>
          <Modal isOpen={modalForm === 'AddChannel'} toggle={clearModalForm}>
            <ModalHeader toggle={clearModalForm}>Add channel</ModalHeader>
            <ModalBody>
              <Form inline autoComplete="off" action="" onSubmit={handleSubmit(this.addChannel)}>
                <Field className="flex-auto" name="name" required component="input" type="text" />
                <Button type="submit" className="btn btn-primary" disabled={disabled}>OK</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
