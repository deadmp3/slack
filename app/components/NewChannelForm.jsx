import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
    } = this.props;
    const disabled = channelCreatingState === 'requested';
    return (
      <form autoComplete="off" action="" onSubmit={handleSubmit(this.addChannel)}>
        <Field name="name" className="form-control" required component="input" type="text" />
        <button type="submit" disabled={disabled} className="btn btn-primary">Send</button>
      </form>
    );
  }
}
