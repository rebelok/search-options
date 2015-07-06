/**
 * Created by user on 03.07.2015.
 */
import React, { Component } from 'react';
import ShownOption from './ShownOption';
import SearchOptionsPopup from './SearchOptionsPopup';

import './styles/shownOption.css';

const log = console.log.bind(console, 'SOC:');

export default
class SearchOptionsControl extends Component {

    constructor(props) {
        super(props);

        this.state = {open: false, filterText: '', options: props.options.sort(this.sortFn)};
        this.idMap = this.state.options.map(item => item.id);
    }

    isNodeInRoot(node, root) {
        while (node) {
            if (node === root) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    handleFilterChange(e) {
        this.setState({filterText: e.target.value});
    }

    sortFn(a, b) {
        if (a.type > b.type) return 1;
        if (a.type < b.type) return -1;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }

    filterShown(item) {
        return item.state > 0;
    }

    filterFn(item) {
        return item[this.props.optionFilterProp].toLowerCase().indexOf(this.state.filterText.toLowerCase()) > -1;
    }

    changeState(id, newState) {
        const options = this.state.options;
        let option = options[this.idMap.indexOf(id)];
        option.state = newState;
        this.setState({options: options})
    }

    setPopupState(newState) {
        if (newState) {
            this.bindRootCloseHandlers();
        } else {
            this.unbindRootCloseHandlers();
        }
        this.setState({open: newState});
    }

    handleDocumentKeyUp(e) {
        if (e.keyCode === 27) {
            this.setPopupState(false);
        }
    }

    handleDocumentClick(e) {
        // If the click originated from within this component
        // don't do anything.
        if (this.isNodeInRoot(e.target, React.findDOMNode(this))) {
            return;
        }

        this.setPopupState(false);
    }


    bindRootCloseHandlers() {
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        document.addEventListener('keyup', this.handleDocumentKeyUp.bind(this));
    }

    unbindRootCloseHandlers() {
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        document.removeEventListener('keyup', this.handleDocumentKeyUp.bind(this));
    }

    componentWillUnmount() {
        this.unbindRootCloseHandlers();
    }

    handleClick() {
        React.findDOMNode(this.refs.searchInput).focus();
        this.setPopupState(true);
    }

    onKeyUp(e) {
        if (e.which === 8) {
            const shownOptions = this.state.options.filter(this.filterShown);
            this.changeState(shownOptions[shownOptions.length - 1].id, 0);
        }
    }

    render() {

        const mainCss = 'b-search-options' + (this.state.open ? ' b-search-options_state_open' : '');
        return (
            <div className={mainCss} onClick={this.handleClick.bind(this)}>
                <ul className="b-shown-options">
                    {
                        this.state.options.filter(this.filterShown).map(
                                option => {
                                return (<ShownOption key={option.id} option={option}
                                                     remove={this.changeState.bind(this, option.id, 0)}/>);
                            })
                    }
                    <li className="b-shown-option b-shown-option_type_input">
                        <input className="b-shown-option__input" type="text" ref="searchInput"
                               onKeyUp={this.onKeyUp.bind(this)}
                               onFocus={this.setPopupState.bind(this,true)} value={this.state.filterText}
                               onChange={this.handleFilterChange.bind(this)}/>
                    </li>
                </ul>
                {this.state.open ?
                    <SearchOptionsPopup options={this.state.options.filter(this.filterFn.bind(this))}
                                        changeState={this.changeState.bind(this)}/>
                    :
                    null
                }
            </div>
        );
    }
}
