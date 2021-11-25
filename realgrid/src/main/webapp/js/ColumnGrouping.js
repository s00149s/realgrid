window.onload = function () {
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);
    
    setFields(dataProvider);
    setColumns(gridView);
    
    setStyles(gridView);
    setOptions(girdView);
    
    loadData(dataProvider);
};

function loadData(provider) {
    var jArr = resultJson;
    dataProvider.setRows(jArr);
}

function setFields(provider) {
    var fields = [{
        fieldName: "id",
        dataType:"number"
    }, {
    	fieldName: "orderId",
        dataType:"number"
    }, {
        fieldName: "customerId"
    }, {
        fieldName: "employeeId",
        dataType:"number"
    }, {
        fieldName: "orderDate",
        dataType: "datetime"
    }, {
        fieldName: "companyName"
    }, {
        fieldName: "country"
    }, {
        fieldName: "phone"
    }, {
        fieldName: "productName"
    }, {
        fieldName: "quantityPerUnit"
    }, {
        fieldName: "quantity",
        dataType: "number"
    }, {
        fieldName: "unitPrice",
        dataType: "number"
    }];
    provider.setFields(fields);
}

function setColumns(grid) {
    var columns = [{
        type: "group",
        name: "GroupOrder",
        orientation: "vertical",
        width: "150",
        header: {
            text: "Order",
            "visible": true
        },
        columns: [{
            type: "group",
            name: "GruopIds",
            width: "200",
            header: {
                text: "IDs",
                visible: true
            },
            columns: [{
                name: "orderId",
                fieldName: "orderId",
                type: "data",
                width: "120",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Order ID"
                }
            }, {
                name: "employeeId",
                fieldName: "employeeId",
                type: "data",
                width: "80",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Emp ID"
                }
            }]
        }, {
            name: "orderDate",
            fieldName: "orderDate",
            type: "data",
            width: "130",
            styles: {
                textAlignment: "center"
            },
            header: {
                text: "Order Date"
            }
        }]
    }, {
        type: "group",
        name: "GroupCustomer",
        width: "260",
        header: {
            text: "Customer"
        },
        columns: [{
            name: "companyName",
            fieldName: "companyName",
            type: "data",
            width: "200",
            styles: {
                textAlignment: "near"
            },
            header: {
                text: "Company"
            }
        }, {
            type: "group",
            name: "GroupCompany",
            width: "150",
            orientation: "vertical",
            header: {
                text: "Company"
            },
            columns: [{
                name: "customerId",
                fieldName: "customerId",
                type: "data",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "ID"
                }
            }, {
                name: "country",
                fieldName: "country",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Country"
                }
            }, {
                name: "phone",
                fieldName: "phone",
                width: "100",
                styles: {
                    textAlignment: "center"
                },
                header: {
                    text: "Phone"
                }
            }]
        }]
    }, {
        name: "productName",
        fieldName: "productName",
        width: "130",
        mergeRule: {
            criteria: "value"
        },
        styles: {
            textAlignment: "near"
        },
        header: {
            text: "Product"
        }
    }, {
        type: "group",
        name: "GroupSales",
        width: "240",
        header: {
            text: "Sales"
        },
        columns: [{
            name: "unit",
            fieldName: "quantityPerUnit",
            width: "150",
            styles: {
                textAlignment: "near"
            },
            header: {
                text: "Unit"
            }
        }, {
            name: "quantity",
            fieldName: "quantity",
            width: "100",
            styles: {
                numberFormat: "#,##0",
                textAlignment: "far",
                paddingRight: 5,
                fontFamily: "Arial",
                fontSize: 11,
                fontBold: true
            },
            header: {
                text: "quantity"
            },
            footer: {
                expression: "sum",
                groupExpression: "sum",
                styles: {
                    textAlignment: "far",
                    numberFormat: "#,##0"
                }
            }
        }, {
            name: "unitPrice",
            fieldName: "unitPrice",
            width: "100",
            styles: {
                numberFormat: "#,##0.0",
                textAlignment: "far",
                paddingRight: 5
            },
            header: {
                text: "Unit Price"
            },
            mergeRule: {
                criteria: "value"
            },
            footer: {
                expression: "sum",
                groupExpression: "sum",
                styles: {
                    textAlignment: "far",
                    numberFormat: "#,##0.0",
                    suffix: "$"
                }
            }
        }]
    }];

    grid.setColumns(columns);
}

function setStyles(grid){
	grid.setStyles(styles);
}

function setOptions(grid) {
    grid.setOptions({
        panel: {
            visible: false
        }
    });
}