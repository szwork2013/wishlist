import React from 'react';

let AddCart = React.createClass({
    delClick() {
      console.log('Produto add');
    },

      render() {
        return (
          <div className="col-xs-4 navbar-form navbar-right row container-fluid">
            <button type="button"
            className="btn btn-success"
            onClick={this.handleClick}>
              AddCart
            </button>
          </div>
        );
      }
    });


export default AddCart;
