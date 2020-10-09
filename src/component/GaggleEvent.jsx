import { GaggleEventStyle } from './GaggleEventStyle';
import React, { Component } from 'react';

export default class GaggleEvent extends Component {

  render() {
    return (
      <div style={GaggleEventStyle}>
        {this.props.text}
      </div>
    );
  }
}