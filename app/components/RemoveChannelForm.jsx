import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';

@reduxForm({ form: 'removeChannel' })
export default class NewChannelForm extends React.Component {
  removeChannel = () => {
    console.log(this.props.channelId);
    this.props.removeChannel(this.props.channelId);
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
          <Modal isOpen={modalForm === 'removeChannel'} toggle={setModalForm}>
            <ModalHeader toggle={setModalForm}>Remove channel</ModalHeader>
            <ModalBody>
              <Form inline autoComplete="off" action="" onSubmit={handleSubmit(this.removeChannel)}>
                <Button type="submit" className="btn btn-primary" disabled={disabled} onClick={setModalForm}>OK</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
