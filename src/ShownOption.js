/**
 * Created by rebel on 7/4/15.
 */

import React, { Component } from 'react';

export default class ShownOption extends Component {
  render() {
    let spanCss = ['b-shown-option__name'];
     if(this.props.option.type){
       switch (this.props.option.state){
         case 1:
           spanCss.push('b-shown-options_state_positive');
           break;
         case 2:
           spanCss.push('b-shown-options_state_negative');
           break;
       }
     }
    return (
      <li className="b-shown-option b-shown-option_type_item">
        <span className={spanCss.join(' ')}>{this.props.option.name}</span>
        <a onClick={this.props.remove} className="b-shown-option__remove"></a>
      </li>
    );
  }
}
