import React from 'react';
import { messagesSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
  };
  return props;
};

@connect(mapStateToProps)
export default class Chat extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        Здесь будет чат
      </div>
    );
  }
}
