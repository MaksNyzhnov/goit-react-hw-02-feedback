import React from 'react';
import css from './Notification.module.css';
class Notification extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p className={css.notification__text}>{this.props.message}</p>;
  }
}
export default Notification;
