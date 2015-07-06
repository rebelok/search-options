import React from 'react';
import App from './App';
import SearchOptionsControl from './SearchOptionsControl';
import SearchOptions from './SearchOptions';
const log = console.log.bind(console,'I:');

(() => {
  const searchOptions = new SearchOptions();
  log(searchOptions.store);
  React.render(<SearchOptionsControl options={searchOptions.store} optionFilterProp="name"/>, document.getElementById('root'));
//todo add @2x images
})();
