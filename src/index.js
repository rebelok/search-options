import React from 'react';
//import SearchOptionsControl from './SearchOptionsControl';
//import SearchOptions from './SearchOptions';
import jq from '../vendor/jquery.min';
import kendo from '../vendor/kendo/js/kendo.all.min';
import k from 'react-kendo';
import Products from './dataSource';
import '../vendor/kendo/styles/kendo.common-material.min.css';
import '../vendor/kendo/styles/kendo.material.min.css';
import './styles/kendo.custom.css';
import doneImage from './images/done.png';


const log = console.log.bind(console, 'I:');

(() => {
    //const searchOptions = new SearchOptions();
    const products = new Products();
    log(doneImage);
    //window.rowNumber = 0;
    const productsDataSource = new kendo.data.DataSource({
        pageSize: 100,
        data: products.data
    });
    /*    window.renderRecordNumber = (data)=> {
     var page = parseInt($(".k-grid").data("kendoGrid").dataSource.page()) - 1;
     var pagesize = $(".k-grid").data("kendoGrid").dataSource.pageSize();
     return parseInt(rowNumber + (parseInt(page) * parseInt(pagesize)));
     };*/
    var gridOptions =
    {
        dataSource: productsDataSource,
        dataBound: function () {
            var rows = this.items();
            $(rows).each(function () {
                var index = $(this).index() + 1;
                var rowLabel = $(this).find(".row-number");
                $(rowLabel).html(index);
            });
        }, toolbar: ["pdf", "excel"],
        pdf: {
            fileName: "FMSI Export.pdf",
        },
        excel: {
            fileName: "FMSI Export.xlsx",
        },
        groupable: true,
        sortable: true,
        reorderable: true,
        pageable: {
            numeric: false
        },
        scrollable: {
            virtual: true
        },
        resizable: true,
        selectable: "multiple",
        height: 900,
        columns: [
            /* { title: " ", width: 50, template: "#= renderRecordNumber(data) #" },*/
            {
                field: "FIELD1",
                title: "UPC",
                width: 140,
                template: '<a href="/Modules/Inventory/UPCTemplate.aspx?ProductDetailsId=#:data.FIELD2#">#:data.FIELD1#</a>'
            },
            {
                field: "FIELD3",
                title: "Product #",
                width: 170,
                template: '<a href="/Modules/Inventory/Product.aspx?ProductId=#:data.FIELD7#">TRG-#:data.FIELD3#</a>&nbsp;<a href="/Modules/Inventory/Product.aspx?ProductId=#:data.FIELD4#">(original)</a>'
            }, {
                field: "FIELD8",
                title: "Product title",
                width: 450
            }, {
                field: "FIELD13",
                title: "Location",
                width: 100,
                template: function (dataItem) {
                    return '<a href="#">'+dataItem.FIELD13+'</a>';
                }
            }, {
                field: "FIELD17",
                title: "Available",
                headerTemplate: '<img src="http://uat.therecongroup.com/Design/Icons/available.png" alt="Available" />',
                width: 30,
                "menu": false,
                headerAttributes: {
                    style: "padding-left: 5px;padding-right: 5px"
                },
                attributes: {
                    style: "padding: .4em"
                },
            }, {
                field: "FIELD19",
                title: "Checked in",
                template: function (dataItem) {
                    return dataItem.FIELD19 ? '<img src="'+doneImage+'" alt="Checked in" />' : '';
                },
                headerTemplate: '<img src="http://uat.therecongroup.com/Design/Icons/icon_upc_barcode.png" alt="" />',
                width: 30,
                headerAttributes: {
                    style: "padding-left: 5px;padding-right: 5px"
                },
                attributes: {
                    style: "padding: .4em"
                }
            }, {
                field: "FIELD20",
                title: "Tested",
                template: function (dataItem) {
                    return dataItem.FIELD20 ? '<img src="'+doneImage+'" alt="Tested" />' : '';
                },
                headerTemplate: '<img src="http://uat.therecongroup.com/Design/Icons/icon_active.png" alt="" />',
                width: 30,
                headerAttributes: {
                    style: "padding-left: 5px;padding-right: 5px"
                },
                attributes: {
                    style: "padding: .4em"
                }
            }, {
                field: "FIELD21",
                title: "G/C/A",
                template: function (dataItem) {
                    return dataItem.FIELD21 ? '<img src="'+doneImage+'" alt="Done" />' : '';
                },
                headerTemplate: '<img src="http://uat.therecongroup.com/Design/Icons/icon_graded.png" alt="" />',
                width: 30,
                headerAttributes: {
                    style: "padding-left: 5px;padding-right: 5px"
                },
                attributes: {
                    style: "padding: .4em"
                }
            }, {
                field: "FIELD22",
                title: "Repaired",
                template: function (dataItem) {
                    return dataItem.FIELD22 ? '<img src="'+doneImage+'" alt="Repaired" />' : '';
                },
                headerTemplate: '<img src="http://uat.therecongroup.com/Design/Icons/icon_repair.png" alt="" />',
                width: 30,
                headerAttributes: {
                    style: "padding-left: 5px;padding-right: 5px"
                },
                attributes: {
                    style: "padding: .4em"
                }
            }, {
                field: "FIELD23",
                title: "Packaged",
                template: function (dataItem) {
                    return dataItem.FIELD23 ? '<img src="'+doneImage+'" alt="Repaired" />' : '';
                },
                headerTemplate: '<img src="http://uat.therecongroup.com/Design/Icons/icon_packaged.png" alt="" />',
                width: 30,
                headerAttributes: {
                    style: "padding-left: 5px;padding-right: 5px"
                },
                attributes: {
                    style: "padding: .4em"
                }
            }, {
                field: "FIELD29",
                title: "Status",
                width: 120
            }, {
                field: "FIELD35",
                title: "ListedOn",
                width: 180
            }, {
                command:{template:'<img src="http://uat.therecongroup.com/Design/Icons/load_complete.png" alt="Repaired" />', className:"vCardButton"},
                title: "Action",
                width: 150
            }]
    };
    React.render(<k.Grid options={gridOptions}/>, document.getElementById('root'));
//todo add @2x images
})();
