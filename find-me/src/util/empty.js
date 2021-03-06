import React from 'react';
import './../assets/css/Style.css';
import ErrorIcon from '../assets/images/error-icon.png';

class empty extends React.Component {

  render() {
    return (
      <div className="empty-content">
        <div className="empty-frags">
          <img src={ErrorIcon} alt="icon" />
          <h2>{this.props.message}</h2>
        </div>
      </div>
    );
  }
}

export default empty;
