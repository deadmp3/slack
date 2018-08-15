import React from 'react';
import { Button, InputGroup, InputGroupAddon } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

@reduxForm({ form: 'newMessage' })
export default class NewMessageForm extends React.Component {
  addMessage = (values) => {
    this.props.addMessage(this.props.channelId, values);
    this.props.reset();
  }
  render() {
    const {
      messageCreatingState,
      handleSubmit,
    } = this.props;
    const disabled = messageCreatingState === 'requested';
    return (
      <form autoComplete="off" action="" onSubmit={handleSubmit(this.addMessage)}>
        <InputGroup>
          <Field name="text" className="form-control" required component="input" type="text" />
          <InputGroupAddon addonType="append"><Button type="submit" disabled={disabled} className="btn btn-primary">Send</Button></InputGroupAddon>
        </InputGroup>
      </form>
    );
  }
}
