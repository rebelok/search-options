/**
 * Created by rebel on 06-Jul-15.
 */
import React, { Component } from 'react';
import './styles/switchControl.css';

export default class SwitchControl extends Component {
    selectionChanged(newState){
        this.props.selectionChanged(newState);
    }

    render() {
        const newState = this.props.type ?
            this.props.selectionState<2?this.props.selectionState+1:0 :
            this.props.selectionState?0:1;
        const switchCss = 'b-switch' + (this.props.type ?
                ' b-switch_type_3':
                ' b-switch_type_2') + ' b-switch_state_'+this.props.selectionState;
        return (
            <div className="b-switch__row"  onClick={this.selectionChanged.bind(this,newState)}>
                <span>{this.props.name}</span>
                <input className={switchCss} type="button" />
            </div>
        );
    }

}