/**
 * Created by rebel on 7/6/15.
 */
import React, { Component } from 'react';
import './styles/SearchOptionsPopup.css';
import SwitchControl from './SwitchControl'

export default
class SearchOptionsPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {options: props.options};
    }

    selectionChanged(id, newState) {
        this.props.changeState(id, newState);
    }

    componentWillReceiveProps(newProps) {
        this.setState({options: newProps.options})
    }

    render() {
        const searchOptions = this.state.options.map((option)=> {

            return <li className="b-search-options__list_item">
                <SwitchControl key={option.id} name={option.name} type={option.type}
                                      selectionState={option.state}
                                      selectionChanged={this.selectionChanged.bind(this,option.id)}/>
            </li>
        });
        return (
            <div className="b-popup">
                <ul className="b-search-options__list">
                    {searchOptions}
                </ul>
            </div>
        );
    }
}
