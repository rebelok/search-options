/**
 * Created by rebel on 7/6/15.
 */
import React, { Component } from 'react';
import './styles/SearchOptionsPopup.css';

export default
class SearchOptionsPopup extends Component {
  render() {
    let searchOptions = this.props.options.map((option)=>{return <li>{option.Name}</li>;});
    return (
      <div className="b-popup">
        <ul className="b-search-options__list">
        {searchOptions}
        </ul>
      </div>
    );
  }
}
