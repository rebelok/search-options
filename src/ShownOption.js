/**
 * Created by rebel on 7/4/15.
 */

import React, { Component } from 'react';

export default class ShownOption extends Component {
  render() {
    return (
      <li className="b-shown-option b-shown-option_type_item">
        <span className="b-shown-option__name">{this.props.name}</span>
        <a onClick={this.props.remove} className="b-shown-option__remove"></a>
      </li>
    );
  }
}
