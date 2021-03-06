import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

@reduxForm({ form: 'editChannel' })
export default class NewChannelForm extends React.Component {
  editChannel = ({ name }) => {
    this.props.editChannel(this.props.channelId, name);
    this.props.reset();
  }
  render() {
    const {
      channelEditingState,
      handleSubmit,
      modalForm,
      setModalForm,
    } = this.props;
    const disabled = channelEditingState === 'requested';

    return (
      <div>
        <div>
          <Modal isOpen={modalForm === 'EditChannel'} toggle={setModalForm}>
            <ModalHeader toggle={setModalForm}>Edit channel</ModalHeader>
            <ModalBody>
              <Form inline autoComplete="off" action="" onSubmit={handleSubmit(this.editChannel)}>
                <Field className="flex-auto" name="name" required component="input" type="text" />
                <Button type="submit" className="btn btn-primary" disabled={disabled} onClick={setModalForm}>OK</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
