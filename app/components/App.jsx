import React from 'react';
import { channelsSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    channels: channelsSelector(state),
  };
  return props;
};

@connect(mapStateToProps)
export default class App extends React.Component {
  render() {
    const { channels } = this.props;
    return channels.map(({ id, name }) => <div key={id}>{name}</div>);
  }
}
