var ProductsGrid=React.createClass ( {
    displayName: "ProductsGrid",
    propTypes: {
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price:React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number,
        workMode: React.PropTypes.number.isRequired,
        setectedProductCode: React.PropTypes.number,
        cbSelected: React.PropTypes.func.isRequired,
        
    },

    productClicked: function(EO) {
      this.props.cbSelected(EO.target.this.props.code);
  },

    render: function () {
        if (this.props.workMode===1) {
            return React.DOM.tr ( {className: 'ISHOP2__PRODUCTLIST_PRODUCT', onClick:this.productClicked},
                   React.DOM.td ({className:'NAME'}, this.props.name),
                   React.DOM.td ({className:"PRICE"}, this.props.price),
                   React.DOM.td ({ className:"URL"}, this.props.url),
                   React.DOM.td ({ className:"QUANTITY"}, this.props.quantity),
                   React.DOM.td ({className:"CONTROL"},
                      React.DOM.input ({type: "button", value: "Delete" }),
                   )
                );
        }
          else {
            return React.DOM.tr( {className:'ISHOP2__PRODUCTLIST_PRODUCT'},
                React.DOM.td({className:'Name'},this.props.name),
                React.DOM.td({className:'PRICE'},this.props.price),
                React.DOM.td({className:'URL'},this.props.url),
                React.DOM.td({className:'QUANTITY'},this.props.quantity),
                React.DOM.td({className:'CONTROL'},this.props.control),
                );
            }
        
                                  
                
              },
            
            });
        
