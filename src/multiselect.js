/**
 * Created by user on 07.07.2015.
 */
import React from 'react';
import MultiSelectComponent from './MultiSelectComponent';

window.App = window.App || {};
window.App.view = window.App.view || {};
const log = console.log.bind(console, 'MS:');

((view) => {

    view.multiselect = (el)=> {
        log(el);
        const sels = JSON.parse(el.getAttribute('data-value') || "[]"),
            source = document.getElementsByName(el.name + '_values')[0],
            data = JSON.parse(source.value || "[]"),
            container = document.getElementById('root2');

        let hdnResult = document.createElement('input');
        hdnResult.name = el.name;
        hdnResult.setAttribute('type', 'hidden');
        container.appendChild(hdnResult);

        let wrapper = document.createElement('div');
        container.replaceChild(wrapper, el);

        const store = data.map((item)=> {
            return {name: item.Name, id: item.Id, type: 0, state: Number(sels.indexOf(item.Id) > -1)};
        });

        const onSelectionChanged = (selectedOptions) => {
            const result = selectedOptions.reduce((prev, curr)=> {
                prev.push(curr.id);
                return prev;
            }, []);
            hdnResult.value = result.join(',');
        };

        React.render(<MultiSelectComponent options={store}
                                           optionFilterProp="name"
                                           onSelectionChanged={onSelectionChanged}/>, wrapper);
    };
})(window.App.view);