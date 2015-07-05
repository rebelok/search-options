/**
 * Created by user on 03.07.2015.
 */
import React, { Component } from 'react';
import ShownOption from './ShownOption';
import './styles/shownOption.css';

const log = console.log.bind(console, 'SOC:');

export default
class SearchOptionsControl extends Component {
  constructor(props) {
    super(props);

    this.idMap = props.options.map(item => item.Id);
    this.state = {open: false, filterText: '', options: props.options};
  }

  handleFilterChange(e) {
    var value = e.target.value;
    this.setState({filterText: value});
  }

  _filterYes(item) {
    return item.state === 1;
  }

  _filterShown(item) {
    return item.state > 0;
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

  render() {

    let mainCss = 'b-search-options' + (this.state.Open ? ' b-search-options_state_open' : '');
    let filterText = this.state.filterText;
    log(this.state);
    return (
      <div className={mainCss}>
        <ul className="b-shown-options">
        {
          this.state.options.filter(this._filterShown).map(
              option => {
              return (<ShownOption key={option.Id} name={option.Name} remove={this.changeState.bind(this, option.Id, 0)}/>);
            })
          }
          <li className="b-shown-option b-shown-option_type_input">
            <input className="b-shown-option__input" type="text" value={filterText} onChange={this.handleFilterChange} />
          </li>
        </ul>
      {this.state.open ? null
        :
        null
        }

      </div>
    );
  }
}
