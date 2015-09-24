import React from 'react';
import MultiSelectComponent from './MultiSelectComponent';
import './multiselect.js';

const log = console.log.bind(console,'SO:');

window.App = window.App || {};
window.App.view = window.App.view || {};

((view) => {

  view.searchoptions = (el)=> {
    log(el);
    const sels = JSON.parse(el.getAttribute('data-value') || "[]"),
          source = document.getElementsByName(el.name + '_values')[0],
          data = JSON.parse(source.value || "[]"),
          container = document.getElementById('root');

    let hdnResult = document.createElement('input');
    hdnResult.name = el.name;
    hdnResult.setAttribute('type', 'hidden');
    container.appendChild(hdnResult);

    let wrapper = document.createElement('div');
    container.replaceChild(wrapper, el);

    const store = data.map((item,index)=> {
      return {name: item.Name, id: index, type: item.Type, value: item.Value, state: Number(sels.indexOf(item.Id) > -1)};
    });

    const onSelectionChanged = (selectedOptions) => {
      const result = selectedOptions.reduce((prev, curr)=> {
        log('reduce result',curr);
        prev.push([curr.value,curr.state].join(':'));
        return prev;
      }, []);
      hdnResult.value = result.join(',');
    };

    React.render(<MultiSelectComponent options={store}
                                       optionFilterProp="name"
                                       onSelectionChanged={onSelectionChanged}/>, wrapper);
  };
})(window.App.view);

window.App.view['multiselect'](document.getElementById('FacilitiesId'));
window.App.view['searchoptions'](document.getElementById('SearchOptions'));
