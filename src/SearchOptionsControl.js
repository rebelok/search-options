/**
 * Created by user on 03.07.2015.
 */
import React, { Component } from 'react';
import ShownOption from './ShownOption';
import SearchOptionsPopup from './SearchOptionsPopup';

import './styles/shownOption.css';

const log = console.log.bind(console, 'SOC:');
const isNodeInRoot=(node, root)=> {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
export default
class SearchOptionsControl extends Component {
  constructor(props) {
    super(props);

    this.idMap = props.options.map(item => item.Id);
    this.state = {open: false, filterText: '', options: props.options};
  }

  handleFilterChange(e) {
    this.setState({filterText: e.target.value});
  }

  filterYes(item) {
    return item.state === 1;
  }

  filterShown(item) {
    return item.state > 0;
  }

  filterFn(item) {
    return item[this.props.optionFilterProp].indexOf(this.state.filterText) > -1;
  }

  changeState(id, newState) {
    log('change', id, newState);
    let options = this.state.options;
    let option = options[this.idMap.indexOf(id)];
    switch (option.state) {
      case 0:
        option.state = newState;
        break;
      case 1:
      case 2:
        option.state = 0;
        break;
    }
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
    if (isNodeInRoot(e.target, React.findDOMNode(this))) {
      return;
    }

    this.setPopupState(false);
  }



  bindRootCloseHandlers() {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  unbindRootCloseHandlers() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    this.unbindRootCloseHandlers();
  }

  render() {

    let mainCss = 'b-search-options' + (this.state.Open ? ' b-search-options_state_open' : '');
    log(this.state);
    return (
      <div className={mainCss}>
        <ul className="b-shown-options">
        {
          this.state.options.filter(this.filterShown).map(
              option => {
              return (<ShownOption key={option.Id} name={option.Name} remove={this.changeState.bind(this, option.Id, 0)}/>);
            })
          }
          <li className="b-shown-option b-shown-option_type_input">
            <input className="b-shown-option__input" type="text" onFocus={this.setPopupState.bind(this,true)} value={this.state.filterText} onChange={this.handleFilterChange.bind(this)} />
          </li>
        </ul>
      {this.state.open ?
<SearchOptionsPopup options={this.state.options.filter(this.filterFn.bind(this))}  />
        :
        null
        }

      </div>
    );
  }
}
