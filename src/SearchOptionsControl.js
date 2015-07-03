/**
 * Created by user on 03.07.2015.
 */
import React, { Component } from 'react';

export default class SearchOptionsControl extends Component {
    var map,
        filterYes = function(item){return item.state === 1;},
        filterShown = function(item){return item.state > 0;};
    getInitialState() {
        map = this.props.options.map(function(item){return item.Id;});
        return {open: false, options: this.props.options,shownOptions: this.props.options.filter(filterShown)};
    }
    changeState(id,newState){
        let option = this.state.options[map.indexOf(id)];
        switch(option.state){
            case 0:
                option.state = newState;
                break;
            case 1:

                break;
        }
    }
    render() {
        let mainCss = 'b-search-options' + (this.state.Open ? ' b-search-options_state_open' : '');

        return (
            <div className={mainCss}>

            </div>
        );
    }
}