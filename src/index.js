import React from 'react';
//import SearchOptionsControl from './SearchOptionsControl';
//import SearchOptions from './SearchOptions';
import jq from '../vendor/jquery.min';
import kendo from '../vendor/kendo/js/kendo.all.min';
import k from 'react-kendo';
import '../vendor/kendo/styles/kendo.common-material.min.css';
import '../vendor/kendo/styles/kendo.material.min.css';

const log = console.log.bind(console, 'I:');

(() => {
    //const searchOptions = new SearchOptions();
    log(k,$,kendo);
    var products = new kendo.data.DataSource({
        schema: {
            model: {
                id: "ProductID",
                fields: {
                    ProductName: { type: "string" }
                }
            }
        },
        transport: {
            read: {
                url: "//demos.telerik.com/kendo-ui/service/products",
                dataType: "jsonp"
            }
        }
    });
    var gridOptions =
        {
            dataSource: products,
            filterable: {
                mode: "row"
            },
            height: 400,
            columns: [{
                field: "ProductName",
                title: "Product Name",
                filterable: {
                    cell: {
                        operator: "contains",
                        template: function (args) {
                            args.element.css("width", "90%").addClass("k-textbox").keydown(function(e){
                                setTimeout(function(){
                                    $(e.target).trigger("change");
                                });
                            });
                        },
                        showOperators: false
                    }
                }
            }]
        };
    React.render(<k.Grid options={gridOptions}/>, document.getElementById('root'));
//todo add @2x images
})();
