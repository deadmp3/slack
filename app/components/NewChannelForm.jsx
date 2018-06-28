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
      modalFormActive,
      toggleModalState,
    } = this.props;
    const disabled = channelCreatingState === 'requested';

    return (
      <div>
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={setModalState}>
          New channel
        </button>

        {modalFormActive &&
          <form autoComplete="off" action="" onSubmit={handleSubmit(this.addChannel)}>
            <Field name="name" className="form-control" required component="input" type="text" />
            <button type="submit" disabled={disabled} className="btn btn-primary">Send</button>
          </form>
        } */}

        <div>
          <Button color="danger" onClick={toggleModalState}>New channel</Button>
          <Modal isOpen={modalFormActive} toggle={toggleModalState}>
            <ModalHeader toggle={toggleModalState}>Add channel</ModalHeader>
            <ModalBody>
              <Form inline autoComplete="off" action="" onSubmit={handleSubmit(this.addChannel)}>
                <Field className="flex-auto" name="name" className="form-control" required component="input" type="text" />
                <Button type="submit" className="btn btn-primary" disabled={disabled} onClick={toggleModalState}>OK</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>


      </div>
    );
  }
}
